import base from './base.js';

export default /** @type {import('eslint').Linter.Config} */ ({
	...base,
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	rules: {
		...base.rules,

		// Disable ES5
		'one-var': 'off',
		'one-var-declaration-per-line': ['off', 'initializations'],
		'vars-on-top': 'off',

		// ES6 specific
		'no-var': 'error',
		'prefer-spread': 'error',
	},
});
