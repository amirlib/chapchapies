const scalars = {
	ConnectionCursor: 'string',
	DateTime: 'string',
	EpochInMs: {
		input: 'Date | number | string',
		output: 'number',
	},
	JSON: 'any',
};

const config = {
	extractAllFieldsToTypes: true,
	namingConvention: 'keep',
	scalars,
	strictScalars: true,
};

const operationConfig = {
	config: {
		...config,
		scalars: {
			...config.scalars,
		},
	},
	preset: 'near-operation-file' as const,
};

export const backendConfig = {
	...operationConfig,
	plugins: ['typescript-operations'],
	presetConfig: { extension: '.generated.ts', baseTypesPath: 'generated/types.ts' },
};

export const frontendConfig = {
	...operationConfig,
	plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
	presetConfig: { extension: '.generated.ts', baseTypesPath: '~@chapchapies/client-schema' },
};

export const defaultConfig = (root: string) => ({
	[`${root}/generated/fragments.ts`]: {
		config: {
			federation: true,
		},
		plugins: ['fragment-matcher'],
	},
	[`${root}/generated/types.ts`]: {
		config,
		plugins: ['typescript'],
	},
});
