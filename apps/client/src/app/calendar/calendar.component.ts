import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'calendar',
	template: `
		<span> Current date {{ currentDate | date }} </span>
		<span> Date received from server: Not received yet :) </span>
	`,
	host: {
		class: 'flex flex-col gap-4 p-4',
	},
	imports: [DatePipe],
})
export class CalendarComponent {
	currentDate = new Date();
}
