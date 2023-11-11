import React from "react";
import { useSelector } from "react-redux";

export const SharableLink = () => {
	const { bg, output, content, heading } = useSelector(
		(state) => state.gptContent
	);

	return (
		<div
			className={`flex flex-col items-center font-kalam h-screen p-6 pt-12`}
		>
			<h1 className="text-5xl font-bold font-kalam text-difty-orange">Difty</h1>
			<div className={`flex items-center text-black my-auto`}>
				<p
					className={`bg-white shadow-2xl p-4 w-full aspect-a4 ${bg} bg-cover`}
				>
					<div className="h-full overflow-hidden bg-white/80 p-4">
						<h1 className=" text-center w-full text-2xl font-bold">
							{heading}
						</h1>
						<div className="leading-relaxed">{output}</div>
					</div>
				</p>
			</div>
		</div>
	);
};
