import base from './eslint.config.mjs';
import ngLint from 'angular-eslint';

export default [
	...base,
	...ngLint.configs.tsAll,
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
