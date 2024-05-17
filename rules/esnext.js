const deepmerge = require('deepmerge');
const base = require('./base.js');

module.exports = deepmerge(
	base,
	/** @type {import('eslint').Linter.Config} */ ({
		parserOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		env: {
			es6: true,
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
	})
);
