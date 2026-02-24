/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				accent: {
					DEFAULT: '#5eead4',
					light: '#99f6e4',
					dark: '#2dd4bf',
					muted: 'rgba(94, 234, 212, 0.1)',
				},
				surface: {
					light: '#ffffff',
					dark: 'rgba(30, 41, 59, 0.5)',
				},
				textLight: '#0f172a',
			},
			fontFamily: {
				fira: "'Fira Code Variable', monospace",
				protest: "'Protest Revolution', system-ui",
			},
			animation: {
				'gradient-shift': 'gradientShift 15s ease infinite',
				'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
			},
			keyframes: {
				gradientShift: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				fadeInUp: {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
}
