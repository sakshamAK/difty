import "./App.css";
import React, { useState } from "react";
import dots from "./assets/wp1.jpeg";
import { Link } from "react-router-dom";

const App = () => {
	const [dims, setDims] = useState("h-0");
	const [textColor, setTextColor] = useState("text-difty-orange");
	const [bgColor, setBgColor] = useState("bg-difty-orange");
	const [flag, setFlag] = useState(true);

	const showTransition = () => {
		setDims("h-screen");
		setTextColor("text-white");
		setBgColor("bg-white");
		setFlag(false);
	};

	return (
		<div
			className={`flex flex-col py-10 px-8 items-center min-h-screen transition-all delay-75 font-kalam ${textColor}`}
		>
			<div className="flex items-center w-full">
				<h1 className="text-xl">DIFTY</h1>
			</div>
			<div className="flex flex-col items-center w-full gap-20 my-auto p-12">
				<div className="bg-wp8 bg-contain p-4 shadow-2xl rounded-4xl -rotate-6 w-full h-85">
					<div className="bg-white/50 flex flex-col text-black py-4 px-2 rounded-3xl items-center h-full">
						<h1 className="font-bold text-2xl">Happy Birthday</h1>
						<p className="text-xmd px-1 my-auto">
							In the land of giggles and high-fives, <br />
							Where cake fights and laughter thrives, <br />
							We reminisce those wild, fun days,
							<br /> Of made-up memories in sunlit haze.
							<br />
							<br /> On birthdays past, we soared so high,
							<br />
							Riding unicorns in the sky, <br />
							Eating clouds like candy,
							<br />
							In a sugar rush, life felt so dandy! <br />
							<br />
							We made a fort out of a cane.
							<br />
							Those crazy moments, are in our lore,
							<br />
							Creating memories, wanting more.
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-1 items-center font-inter">
					<h1 className="text-7xl font-bold font-kalam">Difty</h1>
					<p
						className={`${
							bgColor !== "bg-white" ? "text-gray-500" : "text-white"
						} transition-all delay-100`}
					>
						Color Your Wishes !
					</p>
					<Link
						to="/create_gift"
						className={`text-center px-4 py-3 font-bold w-full mt-8 ${bgColor} ${
							bgColor === "bg-white" ? "text-difty-orange" : "text-white"
						} rounded-2xl min-w-max`}
					>
						Dift Up!
					</Link>
				</div>
			</div>
		</div>
	);
};

export default App;
