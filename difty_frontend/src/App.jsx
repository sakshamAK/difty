import "./App.css";
import axios from "axios";
import temp from "./assets/template.png";
import { useDispatch, useSelector } from "react-redux";
import { addContent, addFrom, addTo, addInfo, generatedGift } from "./redux/slices/generateTextSlice";
import { Link } from "react-router-dom";

function App() {
	const dispatch = useDispatch();
	const content = useSelector(state => state.gptContent);
	const generateText = async () => {
		const res = await axios.post("http://localhost:3000/message", content)	
		dispatch(generatedGift(res.data.generated_gift))
	}

	return (
		<main className="flex flex-col min-h-screen justify-around font-playpen items-center bg-pinkLamaBunny bg-cover bg-fixed overflow-hidden">
			<div className="flex flex-col items-center gap-4">
				<h1 className="text-4xl font-bold italic">Difty</h1>
				<div className="flex items-center w-full justify-evenly gap-8">
					<img src={temp} className="h-56 w-auto max-w-screen-2xl" />
				</div>
				<div className="flex items-center justify-around w-1/2">
					<div className="flex items-center gap-2">
						<input type="radio" id="poem" name="category" value="poem" onClick = {e => dispatch(addContent(e.target.value))} />
						<label htmlFor="poem" className="text-lg font-semibold">
							Poem
						</label>
					</div>
					<div className="flex items-center gap-2">
						<input type="radio" id="story" name="category" value="story" onClick = {e => dispatch(addContent(e.target.value))}/>
						<label htmlFor="story" className="text-lg font-semibold">
							Story
						</label>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center gap-4 w-11/12 bg-gray-500/40 py-8 rounded-2xl font-baloo">
				<div className="flex flex-col w-10/12">
					<label htmlFor="whoFor">Who is this for?</label>
					<input
						type="text"
						className="py-2 px-4"
						id="whoFor"
						placeholder="Dumbo, Chikku, Mikki"
						onChange = {e => dispatch(addTo(e.target.value))}
					/>
				</div>
				<div className="flex flex-col w-10/12">
					<label htmlFor="yourName">Your Name?</label>
					<input
						type="text"
						className="py-2 px-4"
						id="yourName"
						placeholder="Your one in a million friend"
						onChange = {e => dispatch(addFrom(e.target.value))}
					/>
				</div>
				<div className="flex flex-col w-10/12">
					<label htmlFor="moreInfo">Tell us more...</label>
					<textarea
						className="p-4 resize-none"
						placeholder="Hey Dumbo! Happy Belated Birthday!🥳"
						onChange = {e => dispatch(addInfo(e.target.value))}
					></textarea>
				</div>
				<Link to = "/choose-bg" className="bg-baby-orange-500 py-2 px-8 rounded-md font-bold text-white" onClick = {generateText}>
					Dift it!
				</Link>
			</div>
		</main>
	);
}

export default App;
