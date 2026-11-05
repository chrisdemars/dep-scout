#!/usr/bin/env node
import { scan } from "./scan.js";
import { readVersion } from "./version.js";

const USAGE = "Usage: dep-scout scan [dir]\n       dep-scout --version";

async function main(argv: string[]): Promise<number> {
  const [command, dir = process.cwd()] = argv;

  if (command === "--version") {
    console.log(await readVersion());
    return 0;
  }

  if (command !== "scan") {
    console.error(USAGE);
    return 1;
  }

  const deps = await scan(dir);
  for (const dep of deps) {
    console.log(`${dep.name}@${dep.version} (${dep.kind})`);
  }
  return 0;
}

main(process.argv.slice(2)).then(
  (code) => process.exit(code),
  (err: unknown) => {
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
  },
);
