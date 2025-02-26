import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideExperimentalZonelessChangeDetection(),
		provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled' })),
	],
};
