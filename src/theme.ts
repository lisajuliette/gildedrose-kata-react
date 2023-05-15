import { themeFonts } from './fonts';

const grid = (gap: number): string => (0.4 * gap).toFixed(2);

const palette = {
	white: '#FFFFFF',
	translucentBlack: 'rgb(0 0 0 / 0.3)',
	darkGreen: 'rgb(10 43 52)',
	tan: '#D5B56D',
	offwhite: '#C5C5C5',
	green: '#51A851',
	blue: '#4D8FB1',
	purple: '#e358e3',
	gold: '#FF8000',
	grey: 'grey',
};

const theme = {
	breakpoints: {
		xs: '320px',
		sm: '480px',
		md: '768px',
		lg: '1024px',
		xl: '1200px',
		xxl: '1440px',
	},
	spacing: {
		gap2: `${grid(2)}rem`,
		gap4: `${grid(4)}rem`,
		gap6: `${grid(6)}rem`,
		gap8: `${grid(8)}rem`,
		gap10: `${grid(10)}rem`,
		gap12: `${grid(12)}rem`,
	},
	colors: {
		primary: palette.tan,
		secondary: palette.darkGreen,
		background: palette.darkGreen,
		backgroundSecondary: palette.tan,
		shadow: palette.translucentBlack,
		highlight: palette.white,
		disabled: palette.grey,
		qualityRating: {
			common: palette.offwhite,
			uncommon: palette.green,
			rare: palette.blue,
			epic: palette.purple,
			legendary: palette.gold,
			default: palette.white,
		},
	},
	typography: {
		h1: {
			...themeFonts.playfairDisplay,
		},
		h2: {
			...themeFonts.ralewayItalic,
		},
		h3: {
			...themeFonts.playfairDisplay,
		},
		h4: {
			...themeFonts.playfairDisplayItalic,
		},
		body: {
			...themeFonts.raleway,
		},
		qualityLabel: {
			num: {
				...themeFonts.playfairDisplay,
			},
			text: {
				...themeFonts.playfairDisplayItalic,
			},
		},
		daysRemainingLabel: {
			num: {
				...themeFonts.playfairDisplayItalic,
			},
			text: {
				...themeFonts.playfairDisplay,
			},
		},
	},
};

export default theme;
export type Theme = typeof theme;
