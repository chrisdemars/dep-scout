# dep-scout

A Node + TypeScript CLI for inspecting a project's dependencies.

Currently it has one command, `dep-scout scan [dir]`, which reads `package.json` in `dir` (default: the current directory) and prints each entry in `dependencies` and `devDependencies` as `name@version (kind)`. `dep-scout --version` prints the CLI's own version from its `package.json`.

## Layout

- `src/scan.ts` — core logic; `scan(dir)` returns `Dependency[]`. No console output here.
- `src/cli.ts` — argument handling and printing only. Unknown command → usage on stderr, exit 1.
- `test/` — vitest tests, one `*.test.ts` per source module.
- `dist/` — build output (gitignored).

## Commands

- `npm run build` — compile `src/` to `dist/` (`tsconfig.build.json`)
- `npm run typecheck` — typecheck `src/` and `test/`
- `npm test` — run vitest once
- `node dist/cli.js scan` — run the built CLI

Run `npm run typecheck && npm test` before calling a change done.

## Conventions

- ESM only (`"type": "module"`, `NodeNext`). Relative imports use the `.js` extension, even from `.ts` files.
- Import Node built-ins with the `node:` prefix.
- Strict TypeScript. TypeScript 7 does not auto-include `@types/*`; new type packages must be added to `types` in `tsconfig.json`.
- Keep logic in pure, testable modules under `src/`; `cli.ts` stays thin.
- Tests that need files create them in a temp dir (`mkdtemp`) and clean up in `afterEach` — no checked-in fixtures unless necessary.
- No runtime dependencies unless clearly justified. Argument parsing is hand-rolled for now.
- Don't add features beyond what's asked.

## Git

- **Never commit.**
- **Never push.**

Leave all changes uncommitted in the working tree for the user to review and commit themselves.
