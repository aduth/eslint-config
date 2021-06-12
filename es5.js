import base from './base.js';

export default {
	...base,
	parserOptions: {
		ecmaVersion: 5,
	},
	rules: {
		...base.rules,

		// Disable ES6
		'no-var': 'off',
		'prefer-spread': 'off',

		// ES5 specific
		'one-var': 'error',
		'one-var-declaration-per-line': ['error', 'initializations'],
		'vars-on-top': 'error',
	},
};
