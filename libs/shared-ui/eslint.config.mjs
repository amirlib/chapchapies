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
					prefix: 'ch',
					style: 'kebab-case',
					type: 'element',
				},
			],
			'@angular-eslint/directive-selector': [
				'error',
				{
					prefix: 'ch',
					style: 'camelCase',
					type: 'attribute',
				},
			],
		},
	},
];
