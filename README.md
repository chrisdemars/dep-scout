# dep-scout

A small command-line tool for inspecting a project's dependencies.

## Installation

dep-scout is not published to npm. Install it from source.

**Requirements:** Node.js 20 or later, plus npm and Git.

```sh
git clone https://github.com/chrisdemars/dep-scout.git
cd dep-scout
npm install
npm run build
npm link
```

`npm link` puts the `dep-scout` command on your `PATH`. Check that it works:

```sh
dep-scout --version
```

If the command isn't found, make sure npm's global `bin` folder is on your `PATH`. Run `npm prefix -g` to find it; the folder is `bin` inside that path on macOS and Linux.

**Updating:** in the clone, run `git pull`, `npm install`, then `npm run build`. The linked command points at the clone, so it picks up the new build right away.

**Uninstalling:** run `npm unlink -g dep-scout`, then delete the clone.

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
