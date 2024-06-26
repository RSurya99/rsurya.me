import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        'cabinet-grotesk': ['CabinetGrotesk-Variable', ...defaultTheme.fontFamily.sans],
        satoshi: ['Satoshi-Variable', ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [],
}
