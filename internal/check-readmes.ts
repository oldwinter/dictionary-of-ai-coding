#!/usr/bin/env -S npx tsx

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { GenerationError, renderReadme } from "./generator.js";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(HERE);

try {
  for (const zh of [false, true]) {
    const label = zh ? "zh/README.md" : "README.md";
    const output = join(ROOT, label);
    if (readFileSync(output, "utf8") !== renderReadme(ROOT, zh)) {
      throw new GenerationError(
        label +
          " is out of sync; run " +
          (zh ? "npm run generate:zh" : "npm run generate")
      );
    }
  }
} catch (error) {
  const message =
    error instanceof GenerationError || error instanceof Error
      ? error.message
      : String(error);
  console.error(message);
  process.exitCode = 1;
}
