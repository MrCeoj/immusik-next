import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	purge: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			fontFamily:{
				PassionOne: ["PassionOne", "sans-serif"]
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
					'fondo' : "url('/fondo.svg')",
				//imagen de fondo
			},
			colors: {
				primary: "#FB038F",
				"back-dark": "#1B1B1B",
				"pink-focus": "#FB038F",
				"pink-accent": "#F837A4",
				"gray-contrast": "#5E5E5E",
				"active-stroke": "#00603B",
				"active-fill": "#64DFAF",
				"inactive-stroke": "#5E6000",
				"inactive-fill": "#DFDA64",
				"banned-stroke": "#600000",
				"banned-fill": "#DF6486",
				"danger-red": "#FF4343",
				"disabled": "#D9D9D9",
				"customGray": 'rgba(42, 46, 45, 0.95)',
				"secciones" : "#2A2E2D",
			}, 
		}
	},
	plugins: []
}

export default config
