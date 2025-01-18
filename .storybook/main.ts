import CopyWebpackPlugin from 'copy-webpack-plugin';
import { NormalModuleReplacementPlugin } from 'webpack';
import { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
	docs: {},
	framework: '@storybook/angular',
	stories: ['../**/*.@(mdx|stories.@(js|ts))'],
	webpackFinal: async (config, { configType }) => {
		config.plugins?.push(
			new CopyWebpackPlugin({
				patterns: [
					{
						from: 'libs/icons/src/lib/assets',
						to: 'assets/icons/',
					},
					{
						from: 'node_modules/iconoir/icons/regular',
						to: 'assets/icons/',
					},
				],
			}),
		);
		if (configType === 'PRODUCTION')
			config.plugins?.push(
				/**
				 * Storybook doesn't seem to use "fileReplacements" in angular.json.
				 * This accomplishes the same result for the environment imports in the app.
				 */
				new NormalModuleReplacementPlugin(/src[\\/]environments[\\/]environment.ts/, './environment.prod.ts'),
			);
		return config;
	},
};

export default config;
