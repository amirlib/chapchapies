import { castToBoolean } from '@chapchapies/shared-lib';

export enum BootstrapMode {
	GenerateSchema = 'GenerateSchema',
	Run = 'Run',
}

export const isBootstrapGenerateSchemaMode = () => {
	return castToBoolean(process.env.GENERATE_SCHEMA, false);
};

export const getBootstrapMode = () => {
	const GENERATE_SCHEMA = isBootstrapGenerateSchemaMode();

	return GENERATE_SCHEMA ? BootstrapMode.GenerateSchema : BootstrapMode.Run;
};
