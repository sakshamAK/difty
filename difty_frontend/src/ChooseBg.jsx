import React from "react";
import { useDispatch } from "react-redux";
import { addBgImage } from "./redux/slices/generateTextSlice";
import { useNavigate } from "react-router-dom";

export const ChooseBg = () => {
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

	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<div className="flex flex-col items-center gap-8 py-8 bg-pinkLamaBunny bg-fixed bg-cover font-playpen">
			<h1 className="text-4xl font-bold">Choose your template</h1>
			<div className="flex justify-center gap-4 flex-wrap w-full">
				{Array.from(Array(27).keys()).map((item) => (
					<img
						src={new URL(`./assets/wp${item + 1}.jpeg`, import.meta.url).href}
						className={`bg-flora bg-cover rounded-s w-1/3 h-auto`}
						onClick={() => {
							// dispatch(addBgImage(`./assets/wp${item + 1}.jpeg`));
							dispatch(addBgImage(templates[item]));
							navigate("/generated_gift");
						}}
					/>
				))}
			</div>
		</div>
	);
};
