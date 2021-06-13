const dependencies = [
	'@typescript-eslint/parser',
	'@typescript-eslint/eslint-plugin',
	'typescript',
];

const config = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
	],
	rules: {
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'error',
	},
};

module.exports = { dependencies, config };
