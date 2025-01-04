import base from './eslint.config.mjs';

export default [
	...base,
	{
		files: ['**/*.ts'],
		rules: {
			'@angular-eslint/component-max-inline-declarations': ['error', { template: 100, styles: 50 }],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					style: 'kebab-case',
				},
			],
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					style: 'camelCase',
				},
			],
			'@angular-eslint/prefer-signals': ['error', { preferReadonlySignalProperties: false }],
		},
	},
];
