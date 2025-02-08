import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

export const RootProviders = [
	provideExperimentalZonelessChangeDetection(),
	provideHttpClient(withInterceptorsFromDi()),
	{ provide: APP_BASE_HREF, useValue: '/' },
];
