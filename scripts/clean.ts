import fs from 'fs-extra';

const FOLDERS_TO_REMOVE = ['.angular', '.nx/cache', 'dist', 'tmp', 'libs/generated'];

const removeFolder = (path: string) => {
	fs.emptyDirSync(path);
	fs.removeSync(path);
};

try {
	FOLDERS_TO_REMOVE.forEach((path) => {
		removeFolder(path);
	});

	console.log('✅ All folders were removed');
} catch (err) {
	console.error(`An Error has occurred while cleaning with error ${err}`);
}
