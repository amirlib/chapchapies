import { Meta, StoryObj } from '@storybook/angular';
import { createStoryModule } from '@chapchapies/storybook';

const meta: Meta = {
	component: HTMLAnchorElement,
	...createStoryModule(),
};

export default meta;

export const Anchors: StoryObj<HTMLAnchorElement> = {
	render: () => ({
		template: `
			<div style="display: flex; flex-direction: column; gap: 20px;">
				<a class="z-link" href="#">This is a link</a>
			</div>
		`,
	}),
};
