import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { scan } from "../src/scan.js";

describe("scan", () => {
  let dir: string;

  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "dep-scout-"));
  });

  afterEach(async () => {
    await rm(dir, { recursive: true, force: true });
  });

  async function writePkg(pkg: object) {
    await writeFile(path.join(dir, "package.json"), JSON.stringify(pkg));
  }

  it("lists dependencies and devDependencies", async () => {
    await writePkg({
      dependencies: { chalk: "^5.3.0" },
      devDependencies: { vitest: "^2.0.0" },
    });

    expect(await scan(dir)).toEqual([
      { name: "chalk", version: "^5.3.0", kind: "dependencies" },
      { name: "vitest", version: "^2.0.0", kind: "devDependencies" },
    ]);
  });

  it("returns an empty list when there are no dependencies", async () => {
    await writePkg({ name: "empty" });
    expect(await scan(dir)).toEqual([]);
  });

  it("rejects when package.json is missing", async () => {
    await expect(scan(dir)).rejects.toThrow(/ENOENT/);
  });
});
