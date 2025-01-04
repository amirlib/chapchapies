const nx = require('@nx/eslint-plugin');
import stylistic from '@stylistic/eslint-plugin-ts';

module.exports = [
	...nx.configs['flat/base'],
	...nx.configs['flat/typescript'],
	...nx.configs['flat/javascript'],
	{
		ignores: [
			'**/*.generated.ts',
			'**/.github',
			'**/dist',
			'**/generated',
			'**/node_modules',
		],
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
		files: ['**/*.ts', '**/*.js'],
		// Override or add rules here
		rules: {},
	},
];
