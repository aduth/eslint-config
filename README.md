# `@aduth/eslint-config`

Andrew Duthie's personal [ESLint](https://eslint.org/) configurations.

## Installation

```
npm install --save-dev @aduth/eslint-config eslint-plugin-jsdoc eslint
```

`eslint` and `eslint-plugin-jsdoc` are peer dependencies of these configurations, and must be installed in your project. For information about installing ESLint, refer to the [Getting Started with ESLint guide](https://eslint.org/docs/user-guide/getting-started).

## Usage

## Usage

```json
{
	"extends": "@aduth/eslint-config"
}
```

Refer to the [ESLint guide on Extending Configuration Files](https://eslint.org/docs/user-guide/configuring#extending-configuration-files).

The configuration includes only rules. You will need to provide environment and plugin settings as appropriate.

## Variations

The default configuration is optimized for ES2015+. The following variations are available:

- `@aduth/eslint-config/base`: Minimal subset of common rules
- `@aduth/eslint-config/esnext`: Rules optimized for ES2015+
- `@aduth/eslint-config/es5`: Rules optimized for ES5 only (assigns `parserOption.ecmaVersion: 5`)

## License

Copyright 2018 Andrew Duthie

Released under the [MIT License](https://github.com/aduth/wping/tree/master/LICENSE.md).
