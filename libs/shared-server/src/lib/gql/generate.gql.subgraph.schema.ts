import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { GraphQLSchemaHost } from '@nestjs/graphql';
import { printSubgraphSchema } from '@apollo/subgraph';
import { outputFile } from 'fs-extra';
import { Logger } from '@nestjs/common';

export const generateGqlSubgraphSchema = async (app: NestFastifyApplication) => {
	Logger.log('Generating GQL subgraph schema', process.env.APP_NAME);

	await app.init();

	const graphQLSchemaHost = app.get(GraphQLSchemaHost);
	const subgraphSchemaStr = printSubgraphSchema(graphQLSchemaHost.schema);

	await outputFile(`libs/generated/subgraph/${process.env.APP_NAME}.gql`, subgraphSchemaStr);

	Logger.log('✅ GQL subgraph schema generated successfully', process.env.APP_NAME);
};
