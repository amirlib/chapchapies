import base from '../../eslint.config.mjs';

export default [
	...base,
	{
		files: ['**/*.ts', '**/*.js'],
		rules: {
			'@nx/enforce-module-boundaries': [
				'error',
				{
					enforceBuildableLibDependency: true,
					allow: [],
					depConstraints: [
						{
							sourceTag: 'scope:host',
							onlyDependOnLibsWithTags: ['*'],
						},
					],
				},
			],
		},
	},
];
