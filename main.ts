// Funniest Autocorrect Fail — u-zeroxfive-funniest-autocorrect-fail-ddf82154
// Writes one single-line autocorrect fail to /output/entry.txt.
// The line must be 1-199 characters, one line, and read as a real
// autocorrected text message: a clear, surprising wrong word that
// lands on first read with no explanation needed.

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Dad, I got the job! I start Monday as a mortician — I meant magician. Please don't tell Mom until I work out which one pays better.";

// The gate requires 1-199 characters of UTF-8 text, a single line.
// Fail loudly instead of writing an entry the gate would refuse.
if (entry.length < 1 || entry.length > 199 || entry.includes("\n")) {
  throw new Error(`entry is ${entry.length} chars; must be 1-199, one line`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
