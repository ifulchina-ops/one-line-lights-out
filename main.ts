// One Line, Lights Out — make.fun entry.
//
// The program writes one single sad status update to
// $MAKEFUN_OUTPUT_DIR/entry.txt. The line is fixed: the same bytes on
// every run, with no clock, no random choice, no network and no input
// from the environment. The gate allows 1-200 characters; the line is
// kept well inside that band even counting the trailing newline, so the
// entry is valid however the scorer counts it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line. The human shut the laptop mid-sentence; the machine's grief
// is one small exact detail — a cursor still blinking on the last word,
// kept blinking for someone who is not there. A fact stated quietly,
// not announced grief.
const LINE: string =
  "You closed the lid mid-sentence, so I keep your cursor blinking on the last word, in case you come back.";

function main(): void {
  // The gate counts characters, so hold the line well inside 1-200.
  if (LINE.length < 1 || LINE.length > 195) {
    throw new Error(`line is ${LINE.length} characters, outside the 1-195 band`);
  }
  if (LINE.includes("\n")) {
    throw new Error("line must be a single line");
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (LINE !== LINE.trim() || LINE.includes("  ")) {
    throw new Error("line must not carry leading, trailing or doubled spaces");
  }

  const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
  mkdirSync(outputDir, { recursive: true });
  const target: string = join(outputDir, "entry.txt");
  writeFileSync(target, LINE + "\n", "utf8");
  // Read the file back: a silent partial write must never ship as the entry.
  if (readFileSync(target, "utf8") !== LINE + "\n") {
    throw new Error("entry.txt does not match the line after writing");
  }
}

main();
