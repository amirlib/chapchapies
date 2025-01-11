import { DecoratorFunction } from 'storybook/internal/types';
import { AngularRenderer } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/types';
import { ApplicationConfig } from '@angular/core';

export const wrapperStory = (wrapperFn: (story?: string) => string): DecoratorFunction<AngularRenderer> => {
	return (story): StoryFnAngularReturnType => {
		const s = story();

		const appConfig = s.applicationConfig ?? ({} as ApplicationConfig);
		const providers = appConfig.providers ?? [];

		return {
			...s,
			template: wrapperFn(s.template),
			applicationConfig: {
				...appConfig,
				providers: [...providers],
			},
		};
	};
};
