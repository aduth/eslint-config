## v4.6.0 (2024-06-22)

### Backwards-Compatible Changes

- Update `eqeqeq` to use [`smart` option](https://eslint.org/docs/latest/rules/eqeqeq#smart)

## v4.5.0 (2024-05-17)

### Improvements

- Use `'latest'` ECMAScript version for `esnext` ruleset

### Backwards-Compatible Changes

- Disable `no-undef` rule in `typescript` ruleset, as it's expected this would be enforced by TypeScript instead

## v4.4.1 (2021-12-18)

### Bug Fixes

- Extracts the internal `@aduth/is-installed` package to a published `@aduth/is-dependency` to resolve workspace install errors once and for all.

### Documentation

- Fix README link to license.

## v4.4.0 (2021-12-18)

### Backward-Compatible Changes

- `array-callback-return` is now configured with the [`allowImplicit` option](https://eslint.org/docs/rules/array-callback-return#allowimplicit)

### Bug Fixes

- Removed explicit file dependency to the internal `@aduth/is-installed` package to hopefully resolve install errors in some versions of NPM.

## v4.3.0 (2021-11-08)

### Backward-Compatible Changes

- The following rules are now disabled:
  - `@typescript/no-explicit-any`
  - `@typescript/no-non-null-assertion`
  - `@typescript-eslint/no-empty-function`
  - `@typescript-eslint/ban-ts-comment`

### Bug Fixes

- Correctly identify unused vars in TypeScript configuration.

## v4.2.1 (2021-06-18)

### Bug Fixes

- Fix missing dependency error.

## v4.2.0 (2021-06-18)

### Backward-Compatible Changes

- `no-promise-executor-return` is no longer enforced, since it makes for awkward call signatures for single line arrow functions, outweighing potential benefit from rule enforcement.

### Enhancements

- Improve performance of optional ruleset opt-in detection.

## v4.1.0 (2021-06-13)

### Backward-Compatible Changes

- `default-param-last` is no longer enforced, since it's incompatible with common reducer / Redux state initialization pattern.

## v4.0.1 (2021-06-13)

### Bug Fixes

- Correctly defines TypeScript peer dependencies to avoid errors about missing parser dependency.

## v4.0.0 (2021-06-13)

### Breaking Changes

- `es6` ruleset is renamed to `esnext`.
- Bump minimum peer dependencies to `eslint@>=7.28.0` and `eslint-plugin-jsdoc@>=35.1.3` (previously `eslint@^5.8.0` and `eslint-plugin-jsdoc@^3.9.1`). Peer dependencies now use `>=` instead of `^` to reduce noise with future major version releases. Note that there is a possibility of breaking changes in future major versions if peer dependencies remove rules.
- Most stylistic rules have been removed. Install `eslint-config-prettier` and `eslint-plugin-prettier` as peer dependencies to enforce style.
- Many new rules have been enabled:
  - `default-case-last`
  - `default-param-last`
  - `for-direction`
  - `getter-return`
  - `jsdoc/check-alignment`
  - `jsdoc/empty-tags`
  - `jsdoc/no-multi-asterisks`
  - `jsdoc/require-param-name`
  - `jsdoc/require-param-type`
  - `jsdoc/require-returns-check`
  - `jsdoc/require-returns-type`
  - `no-constructor-return`
  - `no-constant-condition`
  - `no-dupe-else-if`
  - `no-global-assign`
  - `no-import-assign`
  - `no-invalid-regexp`
  - `no-new-symbol`
  - `no-obj-calls`
  - `no-promise-executor-return`
  - `no-throw-literal`
  - `no-unsafe-optional-chaining`
  - `require-await`
  - `use-isnan`

### Enhancements

- Add support for Prettier rule configuration via `eslint-config-prettier` and `eslint-plugin-prettier`.
- Add support for TypeScript rule configuration via `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`.
- Most peer dependencies are now optional, enabling additional rules when present in the consuming project.
- The `esnext` ruleset enables `es6` env value by default.

## v3.0.0 (2018-10-31)

- Bump minimum peer dependencies to `eslint@^5.8.0` and `eslint-plugin-jsdoc@^3.9.1` (previously `eslint@^4.18.0` and `eslint-plugin-jsdoc@^3.4.1`)

## v2.0.0 (2018-02-17)

- New variations: `@aduth/eslint-config/base`, `@aduth/eslint-config/es6`, `@aduth/eslint-config/es5`
- New peer dependency: `eslint-plugin-jsdoc`
- New base rules: `array-callback-return`, `arrow-spacing`, `block-scoped-var`, `capitalized-comments`, `generator-star-spacing`, `implicit-arrow-linebreak`, `jsdoc/check-param-names`, `jsdoc/check-tag-names`, `jsdoc-check-types`, `jsdoc/newline-after-description`, `line-comment-position`, `no-bitwise`, `no-const-align`, `no-dupe-class-members`, `no-duplicate-imports`, `no-extra-boolean-cast`, `no-func-assign`, `no-irregular-whitespace`, `no-mixed-operators`, `no-negated-condition`, `no-sparse-arrays`, `no-this-before-super`, `no-undef,init`, `no-unneeded-ternary`, `no-unsafe-negation`, `no-useless-escape`, `no-useless-return`, `no-whitespace-before-property`, `object-curly-newline`, `operator-assignment`, `padding-line-between-statements` (`case`), `require-yield`, `rest-spread-spacing`, `spaced-comment`, `switch-colon-spacing`
- Removed base rules: `no-process-exit`, `spaced-comment`, `switch-colon-spacing`, `valid-typeof`
- Changed base rules: `operator-linebreak` (removed ternary exception), `comma-dangle` (only multi-line), `quote-props` (`keywords` now `false`), `quotes` (no exception for escapes), `valid-jsdoc` (require param/return description, require return type)
- Variation-specific rules:
  - ES5: `one-var`, `one-var-declaration-per-line`, `vars-on-top`
  - ES6: `no-var`, `prefer-spread`

## v1.0.0 (2018-02-10)

- Initial release
