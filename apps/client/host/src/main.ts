import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig, AppRootComponent } from './app/root';

bootstrapApplication(AppRootComponent, appConfig).catch((err) => console.error(err));
