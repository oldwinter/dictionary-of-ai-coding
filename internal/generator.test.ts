import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import {
  parseArgs,
  parseCurriculum,
  parseEntry,
  rewriteLinks,
  validateAnchors,
  validateEditionParity,
} from "./generator.js";

function words(count: number): string {
  return Array.from({ length: count }, (_, index) => "word" + index).join(" ");
}

function entry(body: string, description = "A valid description."): string {
  return ["---", "description: " + description, "---", "", body, ""].join("\n");
}

test("English entries enforce the 200-word boundary", () => {
  assert.throws(
    () => parseEntry(entry(words(199)), "dictionary/Short.md", "en"),
    /at least 200 words \(199\)/
  );
  assert.doesNotThrow(() =>
    parseEntry(entry(words(200)), "dictionary/Exact.md", "en")
  );
});

test("frontmatter requires one short description", () => {
  const body = words(200);
  assert.throws(
    () => parseEntry(body, "dictionary/Missing.md", "en"),
    /missing frontmatter opening delimiter/
  );
  assert.throws(
    () => parseEntry(entry(body, "x".repeat(140)), "dictionary/Long.md", "en"),
    /shorter than 140 characters/
  );
  assert.throws(
    () =>
      parseEntry(
        ["---", "description: First", "description: Second", "---", body].join(
          "\n"
        ),
        "dictionary/Duplicate.md",
        "en"
      ),
    /duplicate frontmatter key description/
  );
  assert.throws(
    () => parseEntry(entry(body, "   "), "dictionary/Empty.md", "en"),
    /description is required/
  );
  assert.throws(
    () =>
      parseEntry(
        ["---", "description: Valid", "tags:", "  - unsafe", "---", body].join(
          "\n"
        ),
        "dictionary/Unsupported.md",
        "en"
      ),
    /unsupported frontmatter key tags/
  );
  assert.doesNotThrow(() =>
    parseEntry(
      [
        "---",
        "description: Valid",
        "aliases:",
        "  - alternate name",
        "---",
        body,
      ].join("\n"),
      "dictionary/Aliases.md",
      "en"
    )
  );
});

test("CRLF frontmatter is normalized before parsing", () => {
  const parsed = parseEntry(
    entry(words(200)).replace(/\n/g, "\r\n"),
    "dictionary/Windows.md",
    "en"
  );
  assert.equal(parsed.description, "A valid description.");
  assert.ok(!parsed.body.includes("description:"));
});

test("entry links require known targets and only one linked occurrence", () => {
  const known = new Set(["Agent"]);
  assert.throws(
    () => rewriteLinks("[Missing](./Missing.md)", "dictionary/A.md", known),
    /link target does not exist/
  );
  assert.throws(
    () =>
      rewriteLinks(
        "[Agent](./Agent.md) then [agent](./Agent.md)",
        "dictionary/A.md",
        known
      ),
    /only the first occurrence may link/
  );
  assert.throws(
    () => rewriteLinks("[Agent](./Agent%ZZ.md)", "dictionary/A.md", known),
    /malformed URI encoding/
  );
});

test("curriculum terms cannot traverse out of the dictionary", () => {
  assert.throws(
    () =>
      parseCurriculum(
        "## Section 1 — Test\n\n- ../CLAUDE\n",
        "internal/Curriculum.md"
      ),
    /must not contain a path segment/
  );
});

test("CLI arguments are strict", () => {
  assert.equal(parseArgs([]), false);
  assert.equal(parseArgs(["--zh"]), true);
  assert.throws(() => parseArgs(["--zhh"]), /Usage:/);
  assert.throws(() => parseArgs(["--zh", "--zh"]), /Usage:/);
});

test("curriculum sections are consecutive and non-empty", () => {
  assert.throws(
    () =>
      parseCurriculum(
        "## Section 1 — One\n\n- A\n\n## Section 3 — Three\n\n- B\n",
        "internal/Curriculum.md"
      ),
    /expected Section 2/
  );
  assert.throws(
    () =>
      parseCurriculum(
        "## Section 1 — Empty\n\n## Section 2 — Next\n\n- A\n",
        "internal/Curriculum.md"
      ),
    /section has no terms/
  );
});

test("generated heading anchors must be unique", () => {
  assert.throws(
    () =>
      validateAnchors(
        [
          {
            heading: "Section 1 — Test",
            terms: ["A+B", "AB"],
            line: 1,
          },
        ],
        "internal/Curriculum.md"
      ),
    /heading anchor collision/
  );
});

test("English and Chinese curricula preserve term order", () => {
  const root = mkdtempSync(join(tmpdir(), "dictionary-parity-"));
  mkdirSync(join(root, "internal"));
  mkdirSync(join(root, "dictionary"));
  mkdirSync(join(root, "zh/dictionary"), { recursive: true });
  writeFileSync(
    join(root, "internal/Curriculum.md"),
    "## Section 1 — Test\n\n- A\n- B\n"
  );
  writeFileSync(
    join(root, "internal/Curriculum.zh.md"),
    "## Section 1 — 测试\n\n- B\n- A\n"
  );
  for (const directory of ["dictionary", "zh/dictionary"]) {
    writeFileSync(join(root, directory, "A.md"), "A");
    writeFileSync(join(root, directory, "B.md"), "B");
  }
  assert.throws(
    () => validateEditionParity(root),
    /order mismatch at position 1/
  );
});

test("English and Chinese dictionaries preserve term sets", () => {
  const root = mkdtempSync(join(tmpdir(), "dictionary-term-set-"));
  mkdirSync(join(root, "internal"));
  mkdirSync(join(root, "dictionary"));
  mkdirSync(join(root, "zh/dictionary"), { recursive: true });
  writeFileSync(
    join(root, "internal/Curriculum.md"),
    "## Section 1 — Test\n\n- A\n"
  );
  writeFileSync(
    join(root, "internal/Curriculum.zh.md"),
    "## Section 1 — 测试\n\n- A\n"
  );
  writeFileSync(join(root, "dictionary/A.md"), "A");
  writeFileSync(join(root, "zh/dictionary/B.md"), "B");

  assert.throws(() => validateEditionParity(root), /dictionary term mismatch/);
});
