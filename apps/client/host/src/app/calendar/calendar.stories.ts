import { Meta, StoryObj } from '@storybook/angular';
import { CalendarComponent } from './calendar.component';
import { createStoryModule } from 'libs/storybook/src';

const meta: Meta<typeof CalendarComponent> = {
	component: CalendarComponent,
	...createStoryModule(),
};

export default meta;

export const CalendarOverview: StoryObj<CalendarComponent> = {
	args: {},
};
