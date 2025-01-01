import base from './base.js';

export default [
	...base,
	/** @type {import('eslint').Linter.Config} */ ({
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			// Disable ES5
			'one-var': 'off',
			'one-var-declaration-per-line': ['off', 'initializations'],
			'vars-on-top': 'off',

			// ESNext specific
			'no-var': 'error',
			'prefer-spread': 'error',
		},
	}),
];
