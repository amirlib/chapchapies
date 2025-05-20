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
	defaultScalarType: 'unknown',
	extractAllFieldsToTypes: true,
	namingConvention: 'keep',
	scalars: { ...scalars },
	strictScalars: true,
	useTypeImports: true,
};

export const backendConfig = {
	config: {
		...config,
	},
	plugins: ['typescript-operations'],
	preset: 'near-operation-file' as const,
	presetConfig: { extension: '.generated.ts', baseTypesPath: 'generated/types.ts' },
};

export const frontendConfig = {
	config: {
		...config,
		apolloAngularVersion: 10,
	},
	plugins: ['typescript-operations', 'typescript-apollo-angular'],
	preset: 'near-operation-file' as const,
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
