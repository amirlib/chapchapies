import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { applicationConfig, Preview } from '@storybook/angular';

export const preview: Preview = {
	decorators: [
		applicationConfig({
			providers: [provideExperimentalZonelessChangeDetection()],
		}),
	],
};
