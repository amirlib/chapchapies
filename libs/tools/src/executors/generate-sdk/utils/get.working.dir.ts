import { ExecutorContext } from 'nx/src/config/misc-interfaces';

export const getWorkingDir = (context: ExecutorContext) => {
	const projectName = context.projectName ?? '';

	return context.projectsConfigurations.projects[projectName].sourceRoot;
};
