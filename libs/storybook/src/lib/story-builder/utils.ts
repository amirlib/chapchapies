import { DecoratorFunction } from 'storybook/internal/types';
import { AngularRenderer } from '@storybook/angular';

export const wrapperStory = (wrapperFn: (story?: string) => string): DecoratorFunction<AngularRenderer> => {
	return (story) => {
		const s = story();

		const providers = s.applicationConfig?.providers ?? [];

		return {
			...s,
			template: wrapperFn(s.template),
			applicationConfig: {
				...(s.applicationConfig ?? {}),
				providers: [...providers],
			},
		};
	};
};
