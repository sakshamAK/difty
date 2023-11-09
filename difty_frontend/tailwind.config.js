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
			backgroundImage: {
				flora: 'url("./assets/wp1.jpeg")',
				balls: 'url("./assets/wp2.jpeg")',
				stroke: 'url("./assets/wp3.jpeg")',
				bnw: 'url("./assets/wp4.jpeg")',
				elf: 'url("./assets/wp5.jpeg")',
				lines: 'url("./assets/wp6.jpeg")',
				waves: 'url("./assets/wp7.jpeg")',
				og: 'url("./assets/wp8.jpeg")',
				rp: 'url("./assets/wp9.jpeg")',
				dots: 'url("./assets/wp10.jpeg")',
				pinkLamaBunny: 'url("./assets/wp11.jpeg")',
				twoHearts: 'url("./assets/wp12.jpeg")',
				blueHearts: 'url("./assets/wp14.jpeg")',
				purpleHearts: 'url("./assets/wp15.jpeg")',
				poppedSkinHearts: 'url("./assets/wp16.jpeg")',
				heartsInHeart: 'url("./assets/wp17.jpeg")',
				bigBlueHearts: 'url("./assets/wp18.jpeg")',
				cornerBigHearts: 'url("./assets/wp19.jpeg")',
				blueFlowers: 'url("./assets/wp20.jpeg")',
				grayflowers: 'url("./assets/wp21.jpeg")',
				artisticFlowers: 'url("./assets/wp22.jpeg")',
				pinkJapeneseFlowers: 'url("./assets/wp23.jpeg")',
				artisticCornerFlowers: 'url("./assets/wp24.jpeg")',
				blueCat: 'url("./assets/wp25.jpeg")',
				bottomFlowers: 'url("./assets/wp26.jpeg")',
				cuteFlowers: 'url("./assets/wp27.jpeg")',
			},
			fontFamily: {
				baloo: ["'Baloo 2'", "sans-serif"],
				inter: ["'Inter'", "sans-serif"],
				playpen: ["'Playpen Sans'", "cursive"],
				kalam: ["'Kalam'", "cursive"],
			},
			minHeight: {
				half: "50vh"
			},
			colors: {
				"difty-orange": "#F95738",
			},
			borderRadius: {
				"4xl": "2.5rem"
			},
			boxShadow: {
				"2xl": "0 0px 50px -12px rgb(0 0 0 / 0.25);"
			},
			aspectRatio: {
				"a4": "0.6"
			}
		},
	},
	plugins: [],
};
