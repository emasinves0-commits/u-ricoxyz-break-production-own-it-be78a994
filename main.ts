import { mkdirSync, writeFileSync } from "node:fs";

const MIN_ENTRY_LENGTH = 1;
const MAX_ENTRY_LENGTH = 200;
const OUTPUT_DIR = "output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

const ENTRY_TEXT =
  "I replaced ‘SELECT * FROM users’ with ‘SELECT * FROM users WHERE id IS NULL’—now 12,345 users are missing, and the login page just shows ‘You are not you.’";

// Guard: the entry is checked before anything is written to disk.
function validateEntry(text: string): void {
  const length = [...text].length; // count characters, not UTF-16 units
  if (length < MIN_ENTRY_LENGTH || length > MAX_ENTRY_LENGTH) {
    throw new Error(
      `entry must be ${MIN_ENTRY_LENGTH}-${MAX_ENTRY_LENGTH} characters, got ${length}`,
    );
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line with no trailing newline");
  }
}

validateEntry(ENTRY_TEXT);
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY_TEXT); // no trailing newline
console.log(`wrote ${OUTPUT_FILE} (${[...ENTRY_TEXT].length} characters)`);
