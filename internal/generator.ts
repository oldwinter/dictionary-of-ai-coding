import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";

export type Section = { heading: string; terms: string[]; line: number };
export type Entry = { description: string; body: string };

export class GenerationError extends Error {
  override name = "GenerationError";
}

function fail(message: string): never {
  throw new GenerationError(message);
}

export function normalizeNewlines(text: string): string {
  return text.replace(/\r\n?/g, "\n");
}

export function parseArgs(args: readonly string[]): boolean {
  if (args.length === 0) return false;
  if (args.length === 1 && args[0] === "--zh") return true;
  fail("Usage: npm run generate [-- --zh]");
}

export function headingSlug(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^\p{L}\p{N} -]/gu, "")
    .replace(/ /g, "-");
}

function validateTerm(term: string, label: string, line: number): void {
  if (term.trim() !== term)
    fail(label + ":" + line + ": term has surrounding whitespace");
  if (/[*_\x60\[]/.test(term))
    fail(
      label + ":" + line + ": term must be plain text, no markdown: " + term
    );
  if (term === "." || term === ".." || /[\/\\\0]/.test(term))
    fail(
      label + ":" + line + ": term must not contain a path segment: " + term
    );
}

export function parseCurriculum(text: string, label: string): Section[] {
  const sections: Section[] = [];
  const seenTerms = new Map<string, number>();
  let current: Section | null = null;

  normalizeNewlines(text)
    .split("\n")
    .forEach((raw, index) => {
      const lineNo = index + 1;
      const line = raw.trimEnd();
      if (line === "") return;

      if (line.startsWith("## ")) {
        if (current && current.terms.length === 0)
          fail(
            label +
              ":" +
              current.line +
              ": section has no terms: " +
              current.heading
          );
        const match = line.match(/^## Section (\d+) — (.+)$/);
        if (!match || !match[1] || !match[2]) {
          fail(
            label +
              ":" +
              lineNo +
              ': section heading must match "## Section N — Title" (em-dash required): ' +
              line
          );
        }
        const number = Number(match[1]);
        const expected = sections.length + 1;
        if (number !== expected)
          fail(
            label +
              ":" +
              lineNo +
              ": expected Section " +
              expected +
              ", found Section " +
              number
          );
        current = { heading: line.slice(3), terms: [], line: lineNo };
        sections.push(current);
        return;
      }

      if (line.startsWith("- ")) {
        if (!current)
          fail(label + ":" + lineNo + ": bullet before any section heading");
        const term = line.slice(2);
        if (!term) fail(label + ":" + lineNo + ": malformed bullet: " + line);
        validateTerm(term, label, lineNo);
        const firstLine = seenTerms.get(term);
        if (firstLine !== undefined)
          fail(
            label +
              ":" +
              lineNo +
              ': duplicate term "' +
              term +
              '" (first at line ' +
              firstLine +
              ")"
          );
        seenTerms.set(term, lineNo);
        current.terms.push(term);
        return;
      }

      fail(
        label +
          ":" +
          lineNo +
          ': only "## Section N — Title" headings and "- Term" bullets are allowed: ' +
          line
      );
    });

  if (sections.length === 0) fail(label + ": curriculum has no sections");
  const lastSection = sections.at(-1);
  if (lastSection && lastSection.terms.length === 0)
    fail(
      label +
        ":" +
        lastSection.line +
        ": section has no terms: " +
        lastSection.heading
    );
  return sections;
}

function parseScalar(raw: string, label: string, line: number): string {
  if (raw.startsWith('"')) {
    try {
      const parsed: unknown = JSON.parse(raw);
      if (typeof parsed !== "string") throw new Error();
      return parsed;
    } catch {
      fail(label + ":" + line + ": invalid quoted frontmatter value");
    }
  }
  if (raw.startsWith("'")) {
    if (!raw.endsWith("'") || raw.length < 2)
      fail(label + ":" + line + ": invalid quoted frontmatter value");
    return raw.slice(1, -1).replace(/''/g, "'");
  }
  return raw;
}

export function parseEntry(
  text: string,
  label: string,
  language: "en" | "zh"
): Entry {
  const lines = normalizeNewlines(text).split("\n");
  if (lines[0] !== "---")
    fail(label + ": missing frontmatter opening delimiter");
  const end = lines.indexOf("---", 1);
  if (end === -1) fail(label + ": missing frontmatter closing delimiter");

  const seen = new Set<string>();
  let currentKey: string | null = null;
  let description: string | null = null;
  for (let index = 1; index < end; index += 1) {
    const line = lines[index] ?? "";
    const lineNo = index + 1;
    if (line.trim() === "") continue;
    if (/^\s+-\s+/.test(line)) {
      if (currentKey !== "aliases")
        fail(
          label + ":" + lineNo + ": list item is only supported under aliases"
        );
      continue;
    }
    const match = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);
    if (!match || !match[1] || match[2] === undefined)
      fail(label + ":" + lineNo + ": malformed frontmatter line");
    const key = match[1];
    const rawValue = match[2];
    if (key !== "description" && key !== "aliases")
      fail(label + ":" + lineNo + ": unsupported frontmatter key " + key);
    if (seen.has(key))
      fail(label + ":" + lineNo + ": duplicate frontmatter key " + key);
    seen.add(key);
    currentKey = key;
    if (key === "description")
      description = parseScalar(rawValue, label, lineNo).trim();
  }

  if (!description) fail(label + ": description is required");
  const descriptionLength = [...description].length;
  if (descriptionLength >= 140)
    fail(
      label +
        ": description must be shorter than 140 characters (" +
        descriptionLength +
        ")"
    );

  const body = lines
    .slice(end + 1)
    .join("\n")
    .replace(/^\n+/, "");
  if (language === "en") {
    const wordCount =
      body.match(/[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)*/g)?.length ?? 0;
    if (wordCount < 200)
      fail(
        label + ": entry must contain at least 200 words (" + wordCount + ")"
      );
  }
  return { description, body };
}

export function rewriteLinks(
  body: string,
  label: string,
  knownTerms: ReadonlySet<string>
): string {
  const linked = new Set<string>();
  return body.replace(
    /\[([^\]]+)\]\(\.\/([^)]+)\.md\)/g,
    (_whole, text: string, encodedTarget: string) => {
      let target: string;
      try {
        target = decodeURIComponent(encodedTarget);
      } catch {
        fail(
          label + ": malformed URI encoding in link to " + encodedTarget + ".md"
        );
      }
      if (!knownTerms.has(target))
        fail(
          label + ": link target does not exist in the curriculum: " + target
        );
      if (linked.has(target))
        fail(label + ": only the first occurrence may link to " + target);
      linked.add(target);
      return "[" + text + "](#" + headingSlug(target) + ")";
    }
  );
}

function flattenTerms(sections: readonly Section[]): string[] {
  return sections.flatMap((section) => section.terms);
}

export function validateAnchors(
  sections: readonly Section[],
  label: string
): void {
  const anchors = new Map<string, string>();
  const headings = sections.flatMap((section) => [
    section.heading,
    ...section.terms,
  ]);
  for (const heading of headings) {
    const slug = headingSlug(heading);
    if (!slug)
      fail(label + ": heading has an empty generated anchor: " + heading);
    const existing = anchors.get(slug);
    if (existing !== undefined)
      fail(
        label +
          ': heading anchor collision "#' +
          slug +
          '" between "' +
          existing +
          '" and "' +
          heading +
          '"'
      );
    anchors.set(slug, heading);
  }
}

function readText(path: string, label: string): string {
  try {
    return readFileSync(path, "utf8");
  } catch {
    fail(label + " does not exist or cannot be read");
  }
}

function listEntryTerms(directory: string, label: string): string[] {
  try {
    return readdirSync(directory)
      .filter((name) => name.endsWith(".md"))
      .map((name) => name.slice(0, -3))
      .sort();
  } catch {
    fail(label + " does not exist or cannot be read");
  }
}

function compareSets(
  left: readonly string[],
  right: readonly string[],
  leftLabel: string,
  rightLabel: string
): void {
  const leftSet = new Set(left);
  const rightSet = new Set(right);
  const leftOnly = [...leftSet].filter((term) => !rightSet.has(term)).sort();
  const rightOnly = [...rightSet].filter((term) => !leftSet.has(term)).sort();
  if (leftOnly.length || rightOnly.length)
    fail(
      leftLabel +
        " / " +
        rightLabel +
        " term mismatch; " +
        leftLabel +
        " only: " +
        (leftOnly.join(", ") || "none") +
        "; " +
        rightLabel +
        " only: " +
        (rightOnly.join(", ") || "none")
    );
}

export function validateEditionParity(root: string): {
  en: Section[];
  zh: Section[];
} {
  const enCurriculum = "internal/Curriculum.md";
  const zhCurriculum = "internal/Curriculum.zh.md";
  const en = parseCurriculum(
    readText(join(root, enCurriculum), enCurriculum),
    enCurriculum
  );
  const zh = parseCurriculum(
    readText(join(root, zhCurriculum), zhCurriculum),
    zhCurriculum
  );
  const enTerms = flattenTerms(en);
  const zhTerms = flattenTerms(zh);
  compareSets(
    listEntryTerms(join(root, "dictionary"), "dictionary"),
    listEntryTerms(join(root, "zh/dictionary"), "zh/dictionary"),
    "dictionary",
    "zh/dictionary"
  );
  if (enTerms.length !== zhTerms.length)
    fail(
      enCurriculum +
        " / " +
        zhCurriculum +
        " term count mismatch (" +
        enTerms.length +
        " vs " +
        zhTerms.length +
        ")"
    );
  for (let index = 0; index < enTerms.length; index += 1) {
    if (enTerms[index] !== zhTerms[index])
      fail(
        enCurriculum +
          " / " +
          zhCurriculum +
          " order mismatch at position " +
          (index + 1) +
          ": " +
          enTerms[index] +
          " vs " +
          zhTerms[index]
      );
  }
  return { en, zh };
}

function resolveEntryPath(directory: string, term: string): string {
  const base = resolve(directory);
  const entryPath = resolve(base, term + ".md");
  const pathFromBase = relative(base, entryPath);
  if (
    pathFromBase === "" ||
    pathFromBase.startsWith(".." + sep) ||
    pathFromBase === ".." ||
    isAbsolute(pathFromBase) ||
    dirname(entryPath) !== base
  )
    fail("dictionary term escapes its directory: " + term);
  return entryPath;
}

function editionPaths(root: string, zh: boolean) {
  return {
    curriculumLabel: zh
      ? "internal/Curriculum.zh.md"
      : "internal/Curriculum.md",
    templateLabel: zh
      ? "internal/README.zh.template.md"
      : "internal/README.template.md",
    dictionaryLabel: zh ? "zh/dictionary" : "dictionary",
    outputLabel: zh ? "zh/README.md" : "README.md",
    template: join(
      root,
      "internal",
      zh ? "README.zh.template.md" : "README.template.md"
    ),
    dictionary: join(root, zh ? "zh/dictionary" : "dictionary"),
    output: join(root, zh ? "zh/README.md" : "README.md"),
  };
}

export function renderReadme(root: string, zh: boolean): string {
  const paths = editionPaths(root, zh);
  const parity = validateEditionParity(root);
  const sections = zh ? parity.zh : parity.en;
  validateAnchors(sections, paths.curriculumLabel);
  const template = normalizeNewlines(
    readText(paths.template, paths.templateLabel)
  );
  const marker = "<!-- CURRICULUM -->";
  const tocMarker = "<!-- TOC -->";
  if (!template.includes(marker))
    fail("Template missing " + marker + " marker: " + paths.templateLabel);
  if (!template.includes(tocMarker))
    fail("Template missing " + tocMarker + " marker: " + paths.templateLabel);

  const terms = flattenTerms(sections);
  const diskTerms = listEntryTerms(paths.dictionary, paths.dictionaryLabel);
  compareSets(terms, diskTerms, paths.curriculumLabel, paths.dictionaryLabel);
  const knownTerms = new Set(terms);
  const parts: string[] = [];
  for (const section of sections) {
    parts.push("## " + section.heading, "");
    for (const term of section.terms) {
      const entryPath = resolveEntryPath(paths.dictionary, term);
      const label = paths.dictionaryLabel + "/" + term + ".md";
      const entry = parseEntry(
        readText(entryPath, label),
        label,
        zh ? "zh" : "en"
      );
      parts.push(
        "### " + term,
        "",
        rewriteLinks(entry.body.trimEnd(), label, knownTerms),
        ""
      );
    }
  }

  const block = parts.join("\n").trimEnd() + "\n";
  const toc = sections
    .map((section) => {
      const sectionTerms = section.terms
        .map((term) => "- [" + term + "](#" + headingSlug(term) + ")")
        .join("\n");
      return [
        "<details>",
        "<summary>" + section.heading + "</summary>",
        "",
        sectionTerms,
        "",
        "</details>",
      ].join("\n");
    })
    .join("\n\n");
  const sourceLine = zh
    ? "zh/dictionary/*.md, internal/Curriculum.zh.md, internal/README.zh.template.md"
    : "dictionary/*.md, internal/Curriculum.md, internal/README.template.md";
  const regenLine = zh ? "npm run generate:zh" : "npm run generate";
  const banner =
    "<!--\n" +
    "  GENERATED FILE — DO NOT EDIT.\n" +
    "  Source: " +
    sourceLine +
    "\n" +
    "  Regenerate: " +
    regenLine +
    "\n" +
    "-->\n\n";
  return banner + template.replace(tocMarker, toc).replace(marker, block);
}

export function writeReadme(root: string, zh: boolean): void {
  const paths = editionPaths(root, zh);
  writeFileSync(paths.output, renderReadme(root, zh));
}
