import { getWorkingDir } from './get.working.dir';
import { ExecutorContext } from 'nx/src/config/misc-interfaces';
import { backendConfig, defaultConfig, frontendConfig } from './config';

export const getGeneratesMap = (context: ExecutorContext, frontend = false) => {
	const config = frontend ? frontendConfig : backendConfig;
	const workingDir = getWorkingDir(context) ?? '';
	const workingDirConfig = workingDir ? { [workingDir]: config } : {};

	return {
		...defaultConfig(workingDir),
		...workingDirConfig,
	};
};
