import { Meta, StoryObj } from '@storybook/angular';
import { createStoryModule } from '@chapchapies/storybook';

const meta: Meta<typeof HTMLAnchorElement> = {
	component: HTMLAnchorElement,
	...createStoryModule(),
};

export default meta;

export const Anchors: StoryObj<HTMLAnchorElement> = {
	render: () => ({
		template: `
			<div style="display: flex; flex-direction: column; gap: 20px;">
				<a class="c-link" href="#">This is a link</a>
			</div>
		`,
	}),
};
