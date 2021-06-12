const dependencies = ['@typescript-eslint/parser', '@typescript-eslint/eslint-plugin'];

const config = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
	],
};

module.exports = { dependencies, config };
