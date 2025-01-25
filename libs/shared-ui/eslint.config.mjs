import base from '../../eslint.frontend.config.mjs';

export default [
	...base,
	{
		files: ['**/*.ts'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: ['@chapchapies/shared-ui'],
				},
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					prefix: 'c',
					style: 'kebab-case',
					type: 'element',
				},
			],
			'@angular-eslint/directive-selector': [
				'error',
				{
					prefix: 'c',
					style: 'camelCase',
					type: 'attribute',
				},
			],
		},
	},
];
