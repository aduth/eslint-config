const dependencies = ['eslint-plugin-prettier', 'eslint-config-prettier'];

const config = {
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
	},
};

module.exports = { dependencies, config };
