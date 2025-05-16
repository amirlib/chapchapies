import fs from 'fs-extra';
import nodeDelete from 'node-delete';

const FOLDERS_TO_REMOVE = ['.angular', '.nx/cache', 'dist', 'tmp', 'libs/generated'];

const removeFolder = (path: string) => {
	fs.emptyDirSync(path);
	fs.removeSync(path);
};

try {
	FOLDERS_TO_REMOVE.forEach((path) => {
		removeFolder(path);
	});

	// delete all generated folders
	nodeDelete(['apps/**/generated', 'apps/**/*.generated.ts', '!apps/']);

	console.log('✅ All folders were removed');
} catch (err) {
	console.error(`An Error has occurred while cleaning with error ${err}`);
}
