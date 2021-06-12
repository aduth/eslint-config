const deepmerge = require('deepmerge');
const base = require('./base.js');

module.exports = deepmerge(
	base,
	/** @type {import('eslint').Linter.Config} */ ({
		parserOptions: {
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
	})
);
