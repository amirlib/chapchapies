import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

export const RootProviders = [provideHttpClient(withInterceptorsFromDi()), { provide: APP_BASE_HREF, useValue: '/' }];
