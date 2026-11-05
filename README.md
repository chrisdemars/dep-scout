# dep-scout

A small command-line tool for inspecting a project's dependencies.

## Requirements

Node.js 20 or later.

## Setup

```sh
npm install
npm run build
```

To make the `dep-scout` command available globally from this checkout:

```sh
npm link
```

## Usage

### `dep-scout scan [dir]`

Reads `package.json` in `dir` (default: the current directory) and prints every entry in `dependencies` and `devDependencies`:

```console
$ dep-scout scan
@types/node@26.6.6 (devDependencies)
typescript@7.0.2 (devDependencies)
vitest@5.1.0 (devDependencies)
```

### `dep-scout --version`

Prints the installed version of dep-scout.

```console
$ dep-scout --version
0.1.0
```

Running with no command or an unknown command prints usage and exits with status 1.

## Development

| Command | Description |
|---|---|
| `npm run build` | Compile `src/` to `dist/` |
| `npm run typecheck` | Typecheck `src/` and `test/` |
| `npm test` | Run the test suite once (vitest) |
| `npm run test:watch` | Run tests in watch mode |

## License

[MIT](LICENSE)
