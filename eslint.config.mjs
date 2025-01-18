import nx from '@nx/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin-ts';

export default [
	...nx.configs['flat/base'],
	...nx.configs['flat/typescript'],
	...nx.configs['flat/javascript'],
	{
		ignores: ['**/*.generated.ts', '**/.github', '**/dist', '**/generated', '**/node_modules'],
	},
	stylistic.configs['all-flat'],
	{
		files: ['**/*.ts', '**/*.js'],
		rules: {
			'@nx/enforce-module-boundaries': [
				'error',
				{
					enforceBuildableLibDependency: true,
					allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
					depConstraints: [
						{
							onlyDependOnLibsWithTags: ['*'],
							sourceTag: '*',
						},
					],
				},
			],
		},
	},
	{
		files: ['**/*.ts', '**/*.js', '**/*.mjs'],
		rules: {
			'max-classes-per-file': ['error', 1],
			'@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/ts/indent': ['error', 'tab'],
			'@stylistic/ts/lines-around-comment': 'off',
			'@stylistic/ts/lines-between-class-members': ['error', 'always'],
			'@stylistic/ts/no-extra-parens': 'off',
			'@stylistic/ts/object-curly-spacing': ['error', 'always'],
			'@stylistic/ts/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
			'@stylistic/ts/quote-props': ['error', 'as-needed'],
			'@stylistic/ts/quotes': ['error', 'single'],
			'@stylistic/ts/space-before-function-paren': [
				'error',
				{
					anonymous: 'always',
					asyncArrow: 'always',
					named: 'never',
				},
			],
		},
	},
	{
		files: ['**/*.json'],
		rules: {
			'@nx/dependency-checks': [
				'error',
				{
					ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs}'],
				},
			],
		},
		languageOptions: {
			parser: import('jsonc-eslint-parser'),
		},
	},
];
