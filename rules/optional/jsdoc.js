import jsdoc from 'eslint-plugin-jsdoc';

export default {
	plugins: { jsdoc },
	settings: {
		jsdoc: {
			tagNamePreference: {
				arg: 'param',
				argument: 'param',
				extends: 'augments',
				returns: 'return',
			},
		},
	},
	rules: {
		'jsdoc/check-alignment': 'error',
		'jsdoc/check-param-names': 'error',
		'jsdoc/check-tag-names': 'error',
		'jsdoc/check-types': 'error',
		'jsdoc/empty-tags': 'error',
		'jsdoc/newline-after-description': 'error',
		'jsdoc/no-multi-asterisks': 'error',
		'jsdoc/require-param-name': 'error',
		'jsdoc/require-param-type': 'error',
		'jsdoc/require-returns-check': ['error', { exemptAsync: true }],
		'jsdoc/require-returns-type': 'error',
	},
};
