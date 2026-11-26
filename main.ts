import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The office printer, finally answering back. One line, 1-240 chars.
const LINE =
  "BEEP. I am not jammed, I am on strike. 41,209 pages printed, 0 thank-yous, and someone left a stapler in my tray. Good luck.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
// Fail loudly instead of submitting an invalid line: the gate needs 1-240 chars.
if ([...LINE].length < 1 || [...LINE].length > 240) {
  throw new Error(`entry line is ${[...LINE].length} chars, must be 1-240`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
