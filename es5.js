import base from './base.js';

export default /** @type {import('eslint').Linter.Config} */ ({
	...base,
	parserOptions: {
		ecmaVersion: 5,
	},
	rules: {
		...base.rules,

		// Disable ESNext
		'no-var': 'off',
		'prefer-spread': 'off',

		// ES5 specific
		'one-var': 'error',
		'one-var-declaration-per-line': ['error', 'initializations'],
		'vars-on-top': 'error',
	},
});
