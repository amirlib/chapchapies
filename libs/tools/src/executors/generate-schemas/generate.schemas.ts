import { PromiseExecutor } from '@nx/devkit';
import { GenerateSchemasExecutorSchema } from './schema';
import path from 'path';
import { spawn } from 'child_process';

const generateSchema: PromiseExecutor<GenerateSchemasExecutorSchema> = async (
	options,
): Promise<{ success: boolean }> => {
	console.log(`Generating schema for ${process.env.APP_NAME}`);

	const file = path.resolve(options.buildTarget, 'main.js');
	const child = spawn('node', [file], {
		detached: true,
		env: {
			...process.env,
			...options.env,
		},
	});

	child.stdout.pipe(process.stdout);
	child.stderr.pipe(process.stderr);

	return new Promise((resolve) => {
		const errHandler = (data: unknown) => {
			if (/(Undefined type error|Cannot determine a GraphQL output)/.test(String(data))) {
				console.error(`Failed to generate schema for ${process.env.APP_NAME}`);

				resolve({ success: false });

				child.kill(1);
			}
		};

		child.stderr.on('data', errHandler);
		child.stdout.on('data', errHandler);

		child.on('exit', (code) => {
			if (code && code > 0) {
				console.error(`Failed to generate schema for ${process.env.APP_NAME} (code: ${code})`);

				resolve({ success: false });
			} else {
				console.log(`Generated schema successfully for ${process.env.APP_NAME} (code: ${code})`);

				resolve({ success: true });
			}
		});
	});
};

export default generateSchema;
