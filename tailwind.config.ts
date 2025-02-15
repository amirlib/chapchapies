import { createGlobPatternsForDependencies } from '@nx/angular/tailwind';
import { join } from 'path';
import { blue, gray, green, indigo, lime, neutral, orange, pink, purple, red, yellow } from 'tailwindcss/colors';

export default {
	content: [
		join(__dirname, 'libs/shared-ui/src/**/*.{html,ts,js}'),
		join(__dirname, 'apps/client/**/*.{html,ts,js}'),
		...createGlobPatternsForDependencies(__dirname),
	],
	theme: {
		colors: {
			blue,
			currentColor: 'currentColor',
			gray,
			green,
			inherit: 'inherit',
			neutral,
			orange,
			pink,
			primary: indigo,
			purple,
			red,
			secondary: lime,
			transparent: 'transparent',
			yellow,
		},
		extend: {},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			mono: ['Noto Sans Mono'],
		},
	},
};
