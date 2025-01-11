import { Meta } from '@storybook/angular';
import { Provider } from '@angular/core';

export interface StoryBuilder extends Meta {
	withImports(...imports: any[]): StoryBuilder;
	withProviders(...providers: (Provider | any)[]): StoryBuilder;
	withWrapper(wrapperFn: (story?: string) => string): StoryBuilder;
}
