/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				"baby-yellow-500": "#FFDC61",
				"baby-yellow-200": "#FFEDAD",
				"baby-yellow-100": "#FFF2DA",
				"baby-blue-500": "#AEAEEE",
				"baby-blue-200": "#DFD8F6",
				"baby-pink-500": "#FFAAA0",
				"baby-pink-200": "#FFD5CF",
				"baby-orange-500": "#FF934A",
			},
			fontSize: {
				xxsm: "12px",
			},
			minHeight: {
				90: "95vh",
			},
		},
	},
	plugins: [],
};
