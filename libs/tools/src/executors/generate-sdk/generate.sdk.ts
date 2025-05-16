import { PromiseExecutor } from '@nx/devkit';
import { GenerateSdkExecutorSchema } from './schema';
import { generate } from '@graphql-codegen/cli';
import { getAllSchemaFiles } from './utils/get.all.schema.files';
import { getDocumentsPath } from './utils/get.documents.path';
import { getGeneratesMap } from './utils/get.generates.map';

const generateSdk: PromiseExecutor<GenerateSdkExecutorSchema> = async (options, context) => {
	console.log(`Ignoring schema file containing ${context.projectName}`);

	const documentsPath = getDocumentsPath(context, options.customQueriesDir);
	const generatesMap = getGeneratesMap(context, options.frontend);
	const schemaFiles = getAllSchemaFiles(options.schemaFolderPath, context.projectName ?? '');

	schemaFiles.forEach((file) => console.log(`>GQL schema file ${file}`));

	const runGqlGen = () => {
		return generate(
			{
				schema: schemaFiles,
				documents: documentsPath,
				generates: generatesMap,
			},
			true,
		);
	};

	try {
		await runGqlGen();

		return { success: true };
	} catch (e) {
		console.error(`Failed to generate sdk for ${process.env.APP_NAME}. ${e}`);

		return { success: false };
	}
};

export default generateSdk;
