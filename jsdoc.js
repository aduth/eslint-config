const dependencies = ['eslint-plugin-jsdoc'];

const config = {
	plugins: ['jsdoc'],
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
		'jsdoc/check-param-names': 'error',
		'jsdoc/check-tag-names': 'error',
		'jsdoc/check-types': 'error',
		'jsdoc/newline-after-description': 'error',
	},
};

module.exports = { dependencies, config };
