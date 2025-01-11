import { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
	docs: {},
	framework: '@storybook/angular',
	stories: ['../**/*.@(mdx|stories.@(js|ts))'],
};

export default config;
