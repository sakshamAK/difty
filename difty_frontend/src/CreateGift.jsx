import axios from "axios";
import dots from "./assets/wp1.jpeg";
import dots1 from "./assets/wp2.jpeg";
import dots2 from "./assets/wp3.jpeg";
import { useDispatch, useSelector } from "react-redux";
import {
	addContent,
	addFrom,
	addTo,
	addInfo,
	generatedGift,
} from "./redux/slices/generateTextSlice";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useEffect, useState } from "react";
export function CreateGift() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const content = useSelector((state) => state.gptContent);
	const [dims, setDims] = useState("h-0 p-0");

	const showTransition = async () => {
		if (!content.content || !content.info || !content.to || !content.from) {
			toast.error("Please fill all fields!");
			return;
		}
		setDims("h-screen p-8");
		const res = await axios.post("http://localhost:3000/message", content);
		dispatch(generatedGift(res.data.generated_gift));
	};

	useEffect(() => {
		dispatch(addContent(""));
		dispatch(addInfo(""));
		dispatch(addFrom(""));
		dispatch(addTo(""));
	}, []);
	console.log(content.output);
	useEffect(() => {
		if (content.output) {
			navigate("/generated_gift");
		}
	}, [navigate, content.output]);

	return (
		<div
			className={`overflow-x-hidden flex bg-difty-orange-400 flex-col py-10 px-8 items-center justify-between min-h-screen transition-all delay-75 font-kalam text-difty-orange`}
		>
			<Toaster />
			<div className="flex items-center w-full">
				<h1 className="text-xl font-bold">DIFTY</h1>
			</div>
			<div
				className={`flex flex-col justify-around items-center overflow-hidden bg-difty-orange absolute top-0 left-0 z-10 w-screen transition-all duration-500 ${dims}`}
			>
				<h1 className="font-bold text-2xl text-center text-white">
					While You Wait
					<br /> Here Is A Poem For You
				</h1>
				<div className="bg-wp8 bg-contain p-4 shadow-2xl rounded-4xl w-full h-488">
					<div className="bg-white/50 flex flex-col text-black py-8 px-2 rounded-3xl items-center gap-6 h-full">
						<h1 className="font-bold text-4xl">You Are A Gem!</h1>
						<p className="text-md px-1">
							In the waiting room of life, you sat so still, <br />
							A patient saint, on time's windowsill.
							<br />
							Thanks a ton for your patience so grand,
							<br />
							You waited for this like grains of sand.
							<br />
							<br />
							While seconds ticked, you didn't lose your cool,
							<br />
							For your wait, We are the grateful fool.
							<br />
							In the tardy tango, you take the lead,
							<br />
							Thanks for waiting, you're a gem indeed!
						</p>
					</div>
				</div>
				<span className="loader"></span>
			</div>
			<div className="flex items-center gap-6">
				{/* <div className=" bg-white shadow-2xl rounded-4xl -rotate-6 w-40 h-60"> */}
				<div className="bg-wp3 bg-cover p-3 shadow-2xl rounded-4xl -rotate-6 w-40 h-60">
					<div className="bg-white/50 flex flex-col text-black py-4 px-2 rounded-3xl items-center h-full">
						<h1 className="font-bold">Happy Birthday</h1>
						<p className="text-xsm px-1 my-auto">
							In the land of giggles and high-fives, <br />
							Where cake fights and laughter thrives, <br />
							We reminisce those wild, fun days,
							<br /> Of made-up memories in sunlit haze.
							<br />
							<br /> On birthdays past, we soared so high,
							<br />
							Riding unicorns across the sky, Eating clouds like cotton candy,
							<br />
							In a sugar rush, life felt so dandy! <br />
						</p>
					</div>
				</div>
				{/* </div> */}
				{/* <div className=" bg-white shadow-2xl rounded-4xl -rotate-6 w-40 h-60"> */}
				<div className="bg-wp6 bg-cover p-3 shadow-2xl rounded-4xl -rotate-6 w-40 h-60">
					<div className="bg-white/50 flex flex-col text-black py-4 px-2 rounded-3xl items-center h-full">
						<h1 className="font-bold">Happy Birthday</h1>
						<p className="text-xsm px-1 my-auto">
							In the land of giggles and high-fives, <br />
							Where cake fights and laughter thrives, <br />
							We reminisce those wild, fun days,
							<br /> Of made-up memories in sunlit haze.
							<br />
							<br /> On birthdays past, we soared so high,
							<br />
							Riding unicorns across the sky, Eating clouds like cotton candy,
							<br />
							In a sugar rush, life felt so dandy! <br />
						</p>
					</div>
				</div>
				{/* </div> */}
				{/* <div className=" bg-white shadow-2xl rounded-4xl -rotate-6 w-40 h-60"> */}
				<div className="bg-wp7 bg-cover p-3 shadow-2xl rounded-4xl -rotate-6 w-40 h-60">
					<div className="bg-white/50 flex flex-col text-black py-4 px-2 rounded-3xl items-center h-full">
						<h1 className="font-bold">Happy Birthday</h1>
						<p className="text-xsm px-1 my-auto">
							In the land of giggles and high-fives, <br />
							Where cake fights and laughter thrives, <br />
							We reminisce those wild, fun days,
							<br /> Of made-up memories in sunlit haze.
							<br />
							<br /> On birthdays past, we soared so high,
							<br />
							Riding unicorns across the sky, Eating clouds like cotton candy,
							<br />
							In a sugar rush, life felt so dandy! <br />
						</p>
					</div>
				</div>
				{/* </div> */}
			</div>
			<div className="flex flex-col gap-4 w-full mb-12">
				<div className="flex flex-col items-center w-full gap-1">
					<h1 className="font-bold text-xl">Gift A:</h1>
					<div className="flex justify-around w-full">
						<div className="flex items-center gap-2">
							<input
								type="radio"
								id="poem"
								name="category"
								value="poem"
								onClick={(e) => dispatch(addContent(e.target.value))}
							/>
							<label
								htmlFor="poem"
								className="text-lg font-semibold text-black"
							>
								Poem
							</label>
						</div>
						<div className="flex items-center gap-2">
							<input
								type="radio"
								id="story"
								name="category"
								value="story"
								onClick={(e) => dispatch(addContent(e.target.value))}
							/>
							<label
								htmlFor="story"
								className="text-lg font-semibold text-black"
							>
								Story
							</label>
						</div>
						<div className="flex items-center gap-2">
							<input
								type="radio"
								id="game"
								name="category"
								value="game"
								onClick={(e) => dispatch(addContent(e.target.value))}
								disabled
							/>
							<label
								htmlFor="game"
								className="text-lg font-semibold text-black"
							>
								Mini Game
							</label>
						</div>
					</div>
				</div>

				<div className="flex flex-col">
					<input
						type="text"
						placeholder="What's Your Name?"
						className="rounded-2xl outline-none border-none bg-white p-4 px-6"
						onChange={(e) => dispatch(addFrom(e.target.value))}
					/>
				</div>
				<div className="flex flex-col">
					<input
						type="text"
						placeholder="Who is This For?"
						className="rounded-2xl outline-none border-none bg-white p-4 px-6"
						onChange={(e) => dispatch(addTo(e.target.value))}
					/>
				</div>
				<div className="flex flex-col">
					<textarea
						placeholder='Tell Us More...                                      "Happy Belated Birthday"                                      "I am Sorry"'
						className="rounded-2xl outline-none border-none bg-white p-4 px-6"
						rows={4}
						onChange={(e) => dispatch(addInfo(e.target.value))}
					></textarea>
				</div>
				<button
					className="px-4 py-3 font-bold self-center bg-difty-orange text-white w-max rounded-2xl"
					onClick={showTransition}
				>
					Dift Up!
				</button>
			</div>
		</div>
	);
}
