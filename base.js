export default {
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
		'array-bracket-spacing': ['error', 'always'],
		'array-callback-return': 'error',
		'arrow-parens': 'error',
		'arrow-spacing': 'error',
		'block-scoped-var': 'error',
		'brace-style': ['error', '1tbs'],
		camelcase: 'error',
		'capitalized-comments': [
			'error',
			'always',
			{
				ignoreConsecutiveComments: true,
				ignoreInlineComments: true,
			},
		],
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': 'error',
		'comma-style': 'error',
		'computed-property-spacing': ['error', 'always'],
		'constructor-super': 'error',
		curly: 'error',
		'dot-notation': 'error',
		eqeqeq: ['error', 'allow-null'],
		'eol-last': 'error',
		'func-call-spacing': 'error',
		'generator-star-spacing': ['error', { before: false, after: true }],
		'implicit-arrow-linebreak': 'error',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'jsdoc/check-param-names': 'error',
		'jsdoc/check-tag-names': 'error',
		'jsdoc/check-types': 'error',
		'jsdoc/newline-after-description': 'error',
		'jsx-quotes': ['error', 'prefer-double'],
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'line-comment-position': 'error',
		'max-len': ['error', { code: 120 }],
		'new-cap': ['error', { capIsNew: false, newIsCap: true }],
		'no-bitwise': 'error',
		'no-console': 'error',
		'no-const-assign': 'error',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': 'error',
		'no-else-return': 'error',
		'no-empty': ['error', { allowEmptyCatch: true }],
		'no-extra-boolean-cast': 'error',
		'no-extra-semi': 'error',
		'no-func-assign': 'error',
		'no-irregular-whitespace': 'error',
		'no-lonely-if': 'error',
		'no-mixed-operators': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multiple-empty-lines': ['error', { max: 1 }],
		'no-multi-spaces': 'error',
		'no-negated-condition': 'error',
		'no-negated-in-lhs': 'error',
		'no-nested-ternary': 'error',
		'no-new': 'error',
		'no-sparse-arrays': 'error',
		'no-redeclare': 'error',
		'no-shadow': 'error',
		'no-spaced-func': 'error',
		'no-this-before-super': 'error',
		'no-trailing-spaces': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-unneeded-ternary': 'error',
		'no-unreachable': 'error',
		'no-unused-vars': 'error',
		'no-unsafe-negation': 'error',
		'no-use-before-define': ['error', 'nofunc'],
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-newline': [
			'error',
			{
				consistent: true,
			},
		],
		'object-curly-spacing': ['error', 'always'],
		'operator-assignment': 'error',
		'operator-linebreak': ['error', 'after'],
		'padded-blocks': ['error', 'never'],
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: 'case', next: 'case' },
		],
		'prefer-const': 'error',
		'quote-props': ['error', 'as-needed', { keywords: false }],
		quotes: ['error', 'single'],
		'require-yield': 'error',
		'rest-spread-spacing': 'error',
		semi: 'error',
		'semi-spacing': 'error',
		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': ['error', 'never'],
		'space-in-parens': ['error', 'always'],
		'space-infix-ops': ['error', { int32Hint: false }],
		'space-unary-ops': [
			'error',
			{
				overrides: {
					'!': true,
				},
			},
		],
		'spaced-comment': 'error',
		'switch-colon-spacing': 'error',
		'valid-jsdoc': [
			'error',
			{
				requireParamDescription: true,
				requireReturnDescription: true,
				requireReturn: false,
				requireReturnType: true,
			},
		],
		'valid-typeof': 'error',
	},
};
