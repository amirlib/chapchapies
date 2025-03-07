import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { GraphQLSchemaHost } from '@nestjs/graphql';
import { printSubgraphSchema } from '@apollo/subgraph';
import { outputFile } from 'fs-extra';

export const generateGqlSubgraphSchema = async (app: NestFastifyApplication) => {
	await app.init();

	const graphQLSchemaHost = app.get(GraphQLSchemaHost);
	const subgraphSchemaStr = printSubgraphSchema(graphQLSchemaHost.schema);

	await outputFile(`libs/generated/subgraph/${process.env.APP_NAME}.gql`, subgraphSchemaStr);
};
