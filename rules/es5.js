import base from './base.js';

export default [
	...base,
	/** @type {import('eslint').Linter.Config} */ ({
		languageOptions: {
			ecmaVersion: 5,
		},
		rules: {
			// Disable ESNext
			'no-var': 'off',
			'prefer-spread': 'off',

			// ES5 specific
			'one-var': 'error',
			'one-var-declaration-per-line': ['error', 'initializations'],
			'vars-on-top': 'error',
		},
	}),
];
