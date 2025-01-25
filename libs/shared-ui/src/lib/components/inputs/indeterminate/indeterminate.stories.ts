import { Meta, StoryObj } from '@storybook/angular';
import { IndeterminateDirective } from './indeterminate.directive';
import { createStoryModule } from '@chapchapies/storybook';

const meta: Meta = {
	component: IndeterminateDirective,
	...createStoryModule().withImports(IndeterminateDirective),
};

export default meta;

export const Indeterminate: StoryObj<IndeterminateDirective> = {
	args: {
		indeterminate: true,
	},
	render: (args) => ({
		props: args,
		template: `
			<label>
				<input type="checkbox" class="z-checkbox" [indeterminate]="indeterminate" />
				This is an indeterminate checkbox
			</label>
		`,
	}),
};
