import "./App.css";
// <<<<<<< HEAD
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
function App() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const content = useSelector((state) => state.gptContent);
	const [dims, setDims] = useState("h-0");

	const showTransition = async () => {
		if (!content.content || !content.info || !content.to || !content.from) {
			toast.error("Please fill all fields!");
			return;
		}
		setDims("h-screen");
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
// =======
// import { Link } from "react-router-dom";
// import GenerateMessage from "./GenerateMessage";
// import Title from "./Components/LandingPageComponents/Title";
// import Feature1 from "./Components/LandingPageComponents/Feature1";
// import Feature2 from "./Components/LandingPageComponents/Feature2";
// import Feature3 from "./Components/LandingPageComponents/Feature3";
// import Feature4 from "./Components/LandingPageComponents/Feature4";
// import Footer from "./Components/LandingPageComponents/footer";
// >>>>>>> d8ffc2b531bf03ba0d87f3f56d9a32c8bbc6ba1b

// function App(){
	return (
// <<<<<<< HEAD
		<div
			className={`overflow-x-hidden flex flex-col py-10 px-8 items-center justify-between min-h-screen transition-all delay-75 font-kalam text-difty-orange`}
		>
			<Toaster />
			<div className="flex items-center w-full">
				<h1 className="text-xl">DIFTY</h1>
			</div>
			<div
				className={`flex flex-col justify-around items-center overflow-hidden bg-difty-orange absolute top-0 left-0 z-10 w-screen transition-all duration-500 ${dims}`}
			>
				<div className=" bg-white shadow-2xl rounded-4xl -rotate-6 p-4 w-1/2 h-1/3 aspect-video">
					<img src={dots} className="h-full rounded-3xl" />
				</div>
				<span className="loader"></span>
			</div>
			<div className="flex items-center gap-6">
				<div className=" bg-white shadow-2xl rounded-4xl -rotate-6 p-4 w-40 h-60 aspect-video">
					<img src={dots} className="h-full rounded-3xl" />
				</div>
				<div className=" bg-white shadow-2xl rounded-4xl -rotate-6 p-4 w-40 h-60 aspect-video">
					<img src={dots1} className="h-full rounded-3xl" />
				</div>
				<div className=" bg-white shadow-2xl rounded-4xl -rotate-6 p-4 w-40 h-60 aspect-video">
					<img src={dots2} className="h-full rounded-3xl" />
				</div>
			</div>
			<div className="flex flex-col gap-4 w-full">
				<div className="flex justify-around">
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
							className="text-lg font-semibold text-gray-500"
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
							className="text-lg font-semibold text-gray-500"
						>
							Story
						</label>
					</div>
				</div>
				<div className="flex flex-col">
					{/* <label className="pl-3 text-black font-inter">What&apos;s Your Name?</label> */}
					<input
						type="text"
						placeholder="What's Your Name?"
						className="rounded-2xl outline-none border-none bg-gray-100 p-4 px-6"
						onChange={(e) => dispatch(addFrom(e.target.value))}
					/>
				</div>
				<div className="flex flex-col">
					{/* <label className="pl-3 text-black font-inter">Your Friend&apos;s Name?</label> */}
					<input
						type="text"
						placeholder="Your Friend's Name?"
						className="rounded-2xl outline-none border-none bg-gray-100 p-4 px-6"
						onChange={(e) => dispatch(addTo(e.target.value))}
					/>
				</div>
				<div className="flex flex-col">
					{/* <label className="pl-3 text-black font-inter">Anything You Want to Add?</label> */}
					<textarea
						placeholder="Anything You Want to Add?"
						className="rounded-2xl outline-none border-none bg-gray-100 p-4 px-6"
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
			<footer className="flex flex-col gap-2 font-inter text-black">
				<div>© Difty Gifty Inc. 2023</div>
				<div className="flex gap-4 justify-between font-bold">
					<p>Instagram</p>
					<p>Twitter</p>
				</div>
			</footer>
		</div>
	);
// =======
// 		<div>
// 			<Landing></Landing>
// 		</div>
// 	)
// }

// function Landing(){
// 	return (
// 		<>
// 		  <Title></Title>
// 		  <Feature1></Feature1>
// 		  <Feature2></Feature2>
// 		  <Feature3></Feature3>
// 		  <Feature4></Feature4>
// 		  <Footer></Footer>
// 		</>
// 	  );
// >>>>>>> d8ffc2b531bf03ba0d87f3f56d9a32c8bbc6ba1b
}

export default App;