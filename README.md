# Dep Scout

A small command-line tool for inspecting a project's dependencies.

## Installation

**Requirements:** Node.js 20 or later.

```sh
npm install -g dep-scout
```

Check that it works:

```sh
dep-scout --version
```

If the command isn't found, make sure npm's global `bin` folder is on your `PATH`. Run `npm prefix -g` to find it; the folder is `bin` inside that path on macOS and Linux.

**Updating:** `npm install -g dep-scout@latest`

**Uninstalling:** `npm uninstall -g dep-scout`

### Run without installing

```sh
npx dep-scout scan
```

### Install from source

To work on dep-scout itself (requires Git):

```sh
git clone https://github.com/chrisdemars/dep-scout.git
cd dep-scout
npm install
npm link
```

`npm install` also builds the CLI, and `npm link` puts your local build on your `PATH`. To remove it, run `npm unlink -g dep-scout`.

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
