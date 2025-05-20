import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideApolloClient } from './providers/provide.apollo.client';

export const appConfig: ApplicationConfig = {
	providers: [
		provideApolloClient(),
		provideExperimentalZonelessChangeDetection(),
		provideHttpClient(),
		provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled' })),
	],
};
