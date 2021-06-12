## v4.0.0 (Unreleased)

### Breaking Changes

- `es6` ruleset is renamed to `esnext`.

### Enhancements

- Add support for Prettier rule configuration via `eslint-config-prettier` and `eslint-plugin-prettier`.
- Most peer dependencies are now optional, enabling additional rules when present in the consuming project.

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
