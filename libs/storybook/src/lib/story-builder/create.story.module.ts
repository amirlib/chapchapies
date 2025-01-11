import { storyAppModuleFactory } from './story.app.module.factory';
import { RootProviders } from './root.providers';

export const createStoryModule = storyAppModuleFactory(RootProviders);
