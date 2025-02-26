import { Routes } from '@angular/router';
import { AppContainerComponent } from '../container';

export const appRoutes: Routes = [
	{
		children: [
			{
				path: '',
				title: 'Chapchapies - Calendar',
			},
		],
		component: AppContainerComponent,
		path: '',
	},
];
