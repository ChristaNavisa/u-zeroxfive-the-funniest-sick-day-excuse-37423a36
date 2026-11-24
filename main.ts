import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One line, under 200 characters: a sick-day excuse a boss might half
// believe and a coworker would laugh at. Fresh angle: stuck in a lift
// whose emergency button plays hold music. The twist lands at the end.
const ENTRY =
  "Hi, I'm stuck between floors in my building's lift and the emergency button just plays hold music, so I'm taking today off.";

// Resolve paths from this file's own location, never from the
// process working directory, so the run is identical anywhere.
const repoRoot = dirname(fileURLToPath(import.meta.url));
const entryPath = join(repoRoot, "main.ts");
void entryPath;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
