import { readdirSync, writeFileSync } from 'fs';
import { basename, dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

export const generateIconsIndexFile = () => {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);

	const iconDirPath = resolve(__dirname, '..', '..', '..', '..', 'node_modules', 'iconoir', 'icons', 'solid'); // Adjust this path if needed
	const iconExports: Array<string> = [];

	// Read all files from the icon directory
	readdirSync(iconDirPath).forEach((file) => {
		if (file.endsWith('.svg')) {
			// Extract the icon name without the extension
			const iconName = basename(file, '.svg');
			// Convert to camelCase with "icon" as a prefix
			const exportKey = `icon${iconName
				.split('-')
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join('')}Solid`;
			// Add the export line
			iconExports.push(`export const ${exportKey} = '${join('assets/icons', `${iconName}-solid.svg`)}';`);
		}
	});

	// Write the export lines to the index.ts file
	writeFileSync(resolve(__dirname, 'index.ts'), iconExports.join('\n'), 'utf8');
};
