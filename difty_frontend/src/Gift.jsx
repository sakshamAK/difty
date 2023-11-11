import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import back from "./assets/back.svg";
import next from "./assets/next.svg";
import { addBgImage } from "./redux/slices/generateTextSlice";
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router-dom";

export const Gift = () => {
	const { bg, output, content, heading } = useSelector(
		(state) => state.gptContent
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
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

	const generateLink = () => {
		dispatch(addBgImage(templates[count]));
		navigate(`/${uuid()}`)
	}

	return (
		<div
			className={`overflow-x-hidden flex flex-col py-10 px-8 items-center min-h-screen transition-all delay-75 font-kalam text-difty-orange`}
		>
			<div className="flex items-center w-full">
				<h1 className="text-xl">DIFTY</h1>
			</div>
			<div className="flex flex-col gap-10 my-auto items-center justify-center h-full">
				<h1 className="text-4xl font-bold font-kalam">Your Gift !</h1>
				<div className={`flex items-center p-2 text-black`}>
					<img
						src={back}
						onClick={() =>
							setCount((p) => (p === 0 ? templates.length - 1 : p - 1))
						}
						className="fixed cursor-pointer left-4 top-1/2 bg-difty-orange shadow-sm shadow-black p-2 rounded-full h-10 w-10"
					/>
					<p
						className={`bg-white shadow-2xl rounded-3xl p-4 w-full aspect-a4 ${templates[count]} bg-cover`}
					>
						<div className="h-full rounded-2xl overflow-hidden bg-white/80 p-4">
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
						className="fixed cursor-pointer right-4 top-1/2 bg-difty-orange shadow-sm shadow-black p-2 rounded-full h-10 w-10"
					/>
				</div>
			</div>
			<button className="bg-difty-orange py-3 px-6 rounded-2xl font-bold text-white text-xl" onClick={generateLink}>
				Generate Link
			</button>
		</div>
	);
};
