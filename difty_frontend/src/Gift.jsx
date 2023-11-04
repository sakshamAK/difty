import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import back from "./assets/back.svg";
import next from "./assets/next.svg";

export const Gift = () => {
	const { bg, output, content, heading } = useSelector(
		(state) => state.gptContent
	);
	const [count, setCount] = useState(0);
	const templates = [
		"bg-flora",
		"bg-balls",
		"bg-stroke",
		"bg-bnw",
		"bg-elf",
		"bg-lines",
		"bg-waves",
		"bg-og",
		"bg-rp",
		"bg-dots",
		"bg-pinkLamaBunny",
		"bg-twoHearts",
		"bg-blueHearts",
		"bg-purpleHearts",
		"bg-poppedSkinHearts",
		"bg-heartsInHeart",
		"bg-bigBlueHearts",
		"bg-cornerBigHearts",
		"bg-blueFlowers",
		"bg-grayflowers",
		"bg-artisticFlowers",
		"bg-pinkJapeneseFlowers",
		"bg-artisticCornerFlowers",
		"bg-blueCat",
		"bg-bottomFlowers",
		"bg-cuteFlowers",
	];

	return (
		<div className="flex flex-col items-center gap-10 p-4 py-8 bg-pinkLamaBunny bg-fixed bg-cover min-h-screen">
			<h1 className="text-4xl font-bold">Generated Gift</h1>
			{output ? (
				<div className={`flex items-center p-2`}>
					<img
						src={back}
						onClick={() =>
							setCount((p) => (p === 0 ? templates.length - 1 : p - 1))
						}
						className="fixed cursor-pointer left-4 top-1/2 bg-white p-2 rounded-full h-10 w-10"
					/>
					<p
						className={`p-4 w-full ${templates[count]} bg-cover shadow-md shadow-black`}
					>
						<div className="bg-white/50 p-8 flex flex-col items-center gap-8">
							<h1 className=" text-center w-full text-2xl font-bold">
								{heading}
							</h1>
							<div className="leading-relaxed">{output}</div>
						</div>
					</p>
					<img
						src={next}
						onClick={() =>
							setCount((p) => (p === templates.length - 1 ? 0 : p + 1))
						}
						className="fixed cursor-pointer right-4 top-1/2 bg-white p-2 rounded-full h-10 w-10"
					/>
				</div>
			) : (
				<span className="loader my-auto rounded-full p-4"></span>
			)}
			<button className="bg-baby-orange-500 py-3 px-6 rounded-md font-bold text-white text-xl">
				Generate Link
			</button>
		</div>
	);
};
