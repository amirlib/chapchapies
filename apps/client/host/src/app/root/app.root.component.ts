import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterOutlet],
	selector: 'chapchapies-root',
	template: ' <router-outlet></router-outlet> ',
})
export class AppRootComponent {}
