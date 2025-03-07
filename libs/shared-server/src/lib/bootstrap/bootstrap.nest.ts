import { NestFactory } from '@nestjs/core';
import { Logger, Type } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { castToBoolean } from '@chapchapies/shared-lib';
import { generateGqlSubgraphSchema } from '../gql/generateGqlSubgraphSchema';

const GENERATE_SCHEMA = castToBoolean(process.env.GENERATE_SCHEMA, false);

const logError = (message: string, error: unknown) => {
	console.error(message);
	console.error(error);
};

process.on('uncaughtException', (e) => logError('uncaughtException', e));
process.on('exit', (e) => logError('exit', e));
process.on('SIGINT', (e) => logError('SIGINT', e));
process.on('SIGUSR1', (e) => logError('SIGUSR1', e));
process.on('SIGUSR2', (e) => logError('SIGUSR2', e));

export type BootstrapNestAppOptions = {
	supportsGql?: boolean;
};

export const bootstrapNest = async (appModule: Type, port: number | string, options?: BootstrapNestAppOptions) => {
	const start = performance.now();

	Logger.log(`✍️ Starting ${process.env.APP_NAME}`, process.env.APP_NAME);

	const app = await NestFactory.create<NestFastifyApplication>(appModule, new FastifyAdapter());

	app.enableShutdownHooks();

	if (GENERATE_SCHEMA) {
		if (options?.supportsGql) {
			Logger.log('Generating GQL Schemas', process.env.APP_NAME);

			await generateGqlSubgraphSchema(app);

			Logger.log('✅ GQL Schemas generated successfully', process.env.APP_NAME);
		}

		await app.close();

		process.exit(0);
	} else {
		await app.listen(port, '0.0.0.0');
	}

	Logger.log(`🚀 ${process.env.APP_NAME} is running on: http://localhost:${port}/`, process.env.APP_NAME);
	Logger.log(`⏱️ Bootstrap took ${Math.round(performance.now() - start) / 1000}s`, process.env.APP_NAME);

	console.log('✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ');
};
