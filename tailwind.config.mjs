/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js"],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				logoFontLight: '#ab6b5a',
				logoFontDark: '#bec4e3',
				textLight: '#231e2d'
			}, fontFamily: {
				fira: "'Fira Code Variable', monospace",
				protest: "'Protest Revolution', system- ui"
			}
		}
	},
	plugins: [require('flowbite/plugin')],
}
