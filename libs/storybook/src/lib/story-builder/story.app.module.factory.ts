import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { RouterModule } from '@angular/router';
import { EnvironmentProviders, importProvidersFrom, Provider } from '@angular/core';
import { wrapperStory } from './utils';
import { StoryBuilder } from './index';

export const storyAppModuleFactory = (RootProviders: Array<Provider | EnvironmentProviders>) => (): StoryBuilder => {
	let staticImports = [RouterModule];

	const rootProviders = (...providers: any[]) =>
		applicationConfig({
			providers: [
				importProvidersFrom(RouterModule.forRoot([], { anchorScrolling: 'enabled', enableTracing: true })),
				...RootProviders,
				...providers,
			],
		});

	let staticDeclarations: any[] = [];
	let staticProviders: any[] = [];
	let wrapperFn: (story?: string) => string = (str?: string) => str ?? '';

	const getModule = () => [
		rootProviders(staticProviders),
		moduleMetadata({ declarations: staticDeclarations, imports: staticImports, providers: staticProviders }),
		wrapperStory(wrapperFn),
	];

	let config: StoryBuilder = {
		decorators: getModule(),
		withImports(...imports): StoryBuilder {
			staticImports = [...staticImports, ...imports];

			config = {
				...config,
				decorators: getModule(),
			};

			return config;
		},
		withProviders(...providers): StoryBuilder {
			staticProviders = [...staticProviders, ...providers];

			config = {
				...config,
				decorators: getModule(),
			};

			return config;
		},
		withWrapper(wrapperFnInternal: (story?: string) => string): StoryBuilder {
			wrapperFn = wrapperFnInternal;

			config = {
				...config,
				decorators: getModule(),
			};

			return config;
		},
	};

	return config;
};
