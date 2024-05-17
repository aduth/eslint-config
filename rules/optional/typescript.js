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
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'no-shadow': 'off',
		'no-undef': 'off',
		'no-unused-vars': 'off',
	},
};

module.exports = { dependencies, config };
