import React from "react";
import { useSelector } from "react-redux";

export const Gift = () => {
	const { bg, output, info } = useSelector((state) => state.gptContent);
	console.log(info);
	return (
		<div className="flex flex-col items-center gap-10 p-4 py-8 bg-pinkLamaBunny bg-fixed bg-cover min-h-screen">
			<h1 className="text-4xl font-bold">Generated Gift</h1>
			{output ? (
				<div className={`flex flex-col items-center p-2`}>
					<p className={`p-4 w-full ${bg} bg-cover shadow-md shadow-black`}>
						<div className="bg-white/50 p-8 flex flex-col items-center gap-8">
							<h1 className=" text-center w-full text-2xl font-bold">{info}</h1>
							<div className="leading-relaxed">{output}</div>
						</div>
					</p>
				</div>
			) : (
				<h1>Loading...</h1>
			)}
            <button className="bg-baby-orange-500 py-3 px-6 rounded-md font-bold text-white text-xl">Generate Link</button>
		</div>
	);
};
