import { AppModule } from './app/app.module';
import { bootstrapNest } from '@chapchapies/shared-server';

bootstrapNest(AppModule, process.env.APP_PORT ?? 5001, { supportsGql: true });
