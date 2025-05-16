import { glob } from 'glob';
import path from 'path';

export const getAllSchemaFiles = (dirPath: string, projectName: string) => {
	console.log(`Generating sdk for ${process.env.APP_NAME}`);

	const schemaGlob = `${dirPath}**/*.gql`;

	console.log(`Getting GQL schema from ${schemaGlob}`);

	const files = glob.sync(schemaGlob);

	return files.filter((file) => {
		// Split the file path into its components
		const pathSegments = file.split(path.sep);

		// Check if the project name appears as a standalone segment
		return !pathSegments.includes(projectName);
	});
};
