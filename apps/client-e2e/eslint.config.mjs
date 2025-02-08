import playwright from 'eslint-plugin-playwright';
import base from '../../eslint.config.mjs';

export default [
	playwright.configs['flat/recommended'],
	...base,
	{
		files: ['**/*.ts', '**/*.js'],
		// Override or add rules here
		rules: {},
	},
];
