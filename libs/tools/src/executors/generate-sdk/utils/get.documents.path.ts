import { ExecutorContext } from 'nx/src/config/misc-interfaces';
import { getWorkingDir } from './get.working.dir';

export const getDocumentsPath = (context: ExecutorContext, customQueriesDir?: string) => {
	const queriesDir = customQueriesDir ?? getWorkingDir(context);

	return [`${queriesDir}/**/*.gql`];
};
