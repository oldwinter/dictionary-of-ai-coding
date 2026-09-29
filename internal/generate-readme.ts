#!/usr/bin/env -S npx tsx

import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { GenerationError, parseArgs, writeReadme } from "./generator.js";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(HERE);

try {
  writeReadme(ROOT, parseArgs(process.argv.slice(2)));
} catch (error) {
  const message =
    error instanceof GenerationError || error instanceof Error
      ? error.message
      : String(error);
  console.error(message);
  process.exitCode = 1;
}
