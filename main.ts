// One-Line Office Joke: 24-Hour Sprint (u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
// Writes a single-line office joke to /output/entry.txt.
// Gate: UTF-8 text, 1 to 200 characters, not only whitespace, one line.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Our office printer only jams on deadline day, which is how I know it has a better sense of timing than my manager.";

// The gate counts characters: keep it one line, no newline inside the joke.
// The trailing newline in the file is the line terminator, not part of the joke.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Joke is ${JOKE.length} characters; gate needs 1-200.`);
}
if (JOKE.trim().length === 0 || JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("Joke must be a single non-blank line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
