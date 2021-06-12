# `@aduth/eslint-config`

Andrew Duthie's personal [ESLint](https://eslint.org/) configurations.

## Installation

```
npm install --save-dev eslint @aduth/eslint-config
```

`eslint` is a peer dependency of these configurations and must be installed in your project.

The following peer dependencies are optional and will enable additional rules when present:

- `eslint-plugin-jsdoc`
- `eslint-plugin-prettier` and `eslint-config-prettier`

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
