import { readFile } from "node:fs/promises";

// package.json sits one level above both src/ and dist/.
const PACKAGE_JSON = new URL("../package.json", import.meta.url);

export async function readVersion(): Promise<string> {
  const pkg = JSON.parse(await readFile(PACKAGE_JSON, "utf8")) as { version?: unknown };
  if (typeof pkg.version !== "string") {
    throw new Error("package.json has no version");
  }
  return pkg.version;
}
