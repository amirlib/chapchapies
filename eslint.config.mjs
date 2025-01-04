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
							sourceTag: '*',
							onlyDependOnLibsWithTags: ['*'],
						},
					],
				},
			],
		},
	},
	{
		files: ['**/*.ts', '**/*.js', '**/*.mjs'],
		rules: {
			'@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/ts/indent': ['error', 'tab'],
			'@stylistic/ts/object-curly-spacing': ['error', 'always'],
			'@stylistic/ts/quote-props': ['error', 'as-needed'],
			'@stylistic/ts/quotes': ['error', 'single'],
		},
	},
];
