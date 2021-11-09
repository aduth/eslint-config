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
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
	},
};

module.exports = { dependencies, config };
