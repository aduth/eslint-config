# `@aduth/eslint-config`

Andrew Duthie's personal [ESLint](https://eslint.org/) configurations.

## Installation

```
npm install --save-dev eslint @aduth/eslint-config
```

`eslint` is a peer dependency of these configurations and must be installed in your project.

The following peer dependencies are optional and will enable additional rules when present:

- JSDoc: `eslint-plugin-jsdoc`
- Prettier: `eslint-plugin-prettier` and `eslint-config-prettier`
- TypeScript: `typescript-eslint`

## Usage

```js
import baseConfig from '@aduth/eslint-config';

export default [
	...baseConfig,
	{
		// Add project specific overrides, if applicable.
	},
];
```

Refer to the [ESLint guide on Using a Shareable Config](https://eslint.org/docs/latest/extend/shareable-configs#using-a-shareable-config).

The configuration includes only rules. You will need to provide environment and plugin settings as appropriate.

## Variations

The default configuration is optimized for ES2015+. The following variations are available:

- `@aduth/eslint-config/base`: Minimal subset of common rules
- `@aduth/eslint-config/esnext`: Rules optimized for ES2015+
- `@aduth/eslint-config/es5`: Rules optimized for ES5 only (assigns `parserOption.ecmaVersion: 5`)

## License

Copyright 2025 Andrew Duthie

Released under the [MIT License](https://github.com/aduth/eslint-config/tree/master/LICENSE.md).
