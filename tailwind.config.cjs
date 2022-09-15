/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				darkBlue1: '#1F1E2E',
				darkBlue2: '#2C2E45',
				lightBlue: '#33E1EC',
			},
		},
	},
	plugins: [],
};
