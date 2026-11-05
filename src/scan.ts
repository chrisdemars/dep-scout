import { readFile } from "node:fs/promises";
import path from "node:path";

export type DependencyKind = "dependencies" | "devDependencies";

export interface Dependency {
  name: string;
  version: string;
  kind: DependencyKind;
}

const KINDS: DependencyKind[] = ["dependencies", "devDependencies"];

export async function scan(dir: string): Promise<Dependency[]> {
  const file = path.join(dir, "package.json");
  const pkg = JSON.parse(await readFile(file, "utf8")) as Partial<
    Record<DependencyKind, Record<string, string>>
  >;

  return KINDS.flatMap((kind) =>
    Object.entries(pkg[kind] ?? {}).map(([name, version]) => ({ name, version, kind })),
  );
}
