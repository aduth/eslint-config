const base = require( './base' );

module.exports = Object.assign( {}, base, {
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
	rules: Object.assign( {}, base.rules, {
		// Disable ES5
		'one-var': 'off',
		'one-var-declaration-per-line': [ 'off', 'initializations' ],
		'vars-on-top': 'off',

		// ES6 specific
		'no-var': 'error',
		'prefer-spread': 'error',
	} ),
} );
