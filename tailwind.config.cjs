/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				amBlack: "#0B2342",
				amBlue: "#0F4B91",
				"amBlue-light": "#0283C5",
				"amBlue-lighter": "#ECF3F9",
				amGreen: "#16D7C6",
				"amGreen-dark": "#11B1A2"
			}
		}
	},
	plugins: []
};
