import tseslint from 'typescript-eslint';

export default [
	...tseslint.configs.recommended,
	{
		rules: {
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-shadow': 'error',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'no-shadow': 'off',
			'no-undef': 'off',
			'no-unused-vars': 'off',
		},
	},
];
