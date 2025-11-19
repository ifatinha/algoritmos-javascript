**Repository Overview**

- **Purpose:** Collection of small, didactic JavaScript algorithms (Vanilla JS) organized by topic under `src/`.
- **Module system:** Project uses ESM (`type: "module"` in `package.json`). Files export named functions (see `src/01-basicos/areaCirculo.js`).
- **Docs:** API docs are generated via JSDoc into `docs/api` and an index is created by `scripts/gerarIndex.js`.

**Quick Commands**

- **Install dependencies:** `npm install`
- **Run tests:** `npm test` (Jest + Babel)
- **Lint:** `npm run lint` (ESLint)
- **Format:** `npm run format` (Prettier)
- **Generate docs:** `npm run docs` (runs `jsdoc -c jsdoc.json` then `npm run gerar-docs-index`)
- **Generate docs index alone:** `npm run gerar-docs-index` (runs `node scripts/gerarIndex.js`)

**What to edit / where to add code**

- Place algorithm implementations under `src/<NN-name>/` (folders commonly prefixed with numbers, e.g. `01-basicos`).
- Use descriptive Portuguese function names (existing convention). Prefer named exports:

  ```js
  // src/01-basicos/areaCirculo.js
  export function calcularAreaCirculo(raio) { ... }
  ```

- Add a corresponding Jest test in `tests/` using ESM import syntax, for example:

  ```js
  import { calcularAreaCirculo } from '../src/01-basicos/areaCirculo.js';
  test('area circulo', () => { expect(calcularAreaCirculo(1)).toBeCloseTo(Math.PI); });
  ```

**Documentation & JSDoc**

- All public functions include JSDoc comments — preserve and extend these when adding functions. JSDoc config is in `jsdoc.json` and outputs to `docs/api`.
- Use tags like `@category`, `@param`, `@returns` and include an `@example` when possible; this ensures examples appear in generated docs.
- After changes, run `npm run docs` to regenerate HTML under `docs/api` and update `docs/index.md` via `scripts/gerarIndex.js`.

**Conventions & Patterns**

- Language: code and identifiers use Portuguese. Keep comments and identifiers consistent with the existing style.
- File & folder names: use the existing numeric prefix pattern for ordering (e.g., `01-basicos`, `02-condicionais`).
- Error handling: small, focused functions throw `Error` for invalid inputs (see `areaCirculo.js`).
- Keep functions small and single-responsibility — these are meant as standalone learning units.

**Tooling / CI devflow notes**

- Pre-commit: `husky` + `lint-staged` are configured. `lint-staged` runs `eslint --fix` and `prettier --write` for staged `.js` files.
- Commit messages follow Conventional Commits; `@commitlint` is configured (see `commitlint.config.js`).
- Tests run via `jest`; `babel-jest` is present to support ESM/modern syntax.

**Do / Don't (practical rules for an AI coding agent)**

- Do: follow Portuguese naming and JSDoc style; add `@example` blocks for clarity.
- Do: place new examples in the matching numeric folder and add tests under `tests/`.
- Do: run `npm run lint` and `npm test` locally before suggesting a PR.
- Don't: edit generated files in `docs/api` directly — regenerate with `npm run docs` instead.

**Examples from this repo**

- JSDoc-driven API: `src/01-basicos/areaCirculo.js` (named export + JSDoc comment).
- Docs index generator: `scripts/gerarIndex.js` (reads `docs/api` / `docs/exemplos` and writes `docs/index.md`).

**If you need more context**

- Check `package.json` scripts and `jsdoc.json` for generation and build behavior.
- Inspect `tests/` to see Jest usage patterns and assertion styles.

If anything is unclear or you'd like the file tuned to a different level of detail, tell me which sections to expand or examples to add.
