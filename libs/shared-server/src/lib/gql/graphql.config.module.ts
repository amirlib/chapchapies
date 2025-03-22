import { Global, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { isDevelopment } from '../utils/is.development';
import { isBootstrapGenerateSchemaMode } from '../bootstraps/get.bootstrap.mode';

@Global()
@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			autoSchemaFile: isBootstrapGenerateSchemaMode()
				? `libs/generated/gql/${process.env.APP_NAME}.gql`
				: undefined,
			autoTransformHttpErrors: true,
			buildSchemaOptions: {
				addNewlineAtEnd: true,
				dateScalarMode: 'timestamp',
				noDuplicatedFields: true,
			},
			driver: ApolloDriver,
			introspection: isDevelopment(),
			playground: isDevelopment(),
		}),
	],
})
export class GraphqlConfigModule {}
