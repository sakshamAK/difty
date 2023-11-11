import React from "react";
import { useSelector } from "react-redux";
import difty from "./assets/difty_logo.svg";

export const SharableLink = () => {
	const { bg, output, content, heading } = useSelector(
		(state) => state.gptContent
	);

	return (
		<div className={`flex flex-col items-center font-kalam h-screen p-6 pt-12`}>
			<img src={difty} style={{ height: "8rem" }} />
			<div className={`flex items-center text-black mt-4`}>
				<p className={`bg-white shadow-2xl p-4 w-full ${bg} bg-cover`}>
					<div className="h-full overflow-hidden bg-white/80 p-4 flex flex-col gap-4">
						<h1 className=" text-center w-full text-2xl font-bold">
							{heading}
						</h1>
						<div className="whitespace-pre-wrap">{output}</div>
					</div>
				</p>
			</div>
		</div>
	);
};
