import "./App.css";

function App() {
	return (
		<main className="flex flex-col min-h-screen justify-around items-center bg-baby-yellow-100 overflow-hidden">
			<div className="flex flex-col items-center gap-4">
				<h1 className="text-4xl font-bold italic">Difty</h1>
				<div className="flex items-center w-full justify-evenly gap-8">
					<div className="bg-baby-yellow-500 p-2">
						<div className="bg-baby-yellow-200 p-2 w-28 h-40 text-xxsm flex flex-col items-center text-center justify-center">
							<strong>Happy anniversary to my amazing husband!</strong>
							<p>💑 Here's to a lifetime of love and laughter together!❤️</p>
						</div>
					</div>
					<div className="bg-baby-pink-500 p-2">
						<div className="bg-baby-pink-200 p-2 w-28 h-40 text-xxsm flex flex-col items-center text-center justify-center">
							<p className="text-lg">💕</p>
							<strong>Hey Dumbo, </strong>
							<p>Happy Belated Birthday!</p>
							<p>Forgiven, but be good, or who knows? 😉</p>
						</div>
					</div>
					<div className="bg-baby-blue-500 p-2">
						<div className="bg-baby-blue-200 p-2 w-28 h-40 text-xxsm flex flex-col items-center text-center justify-center">
							<strong>Hey bestie!</strong>
							<p>
								Me being dumb without you is like a pencil without lead -
								pointless! But hey, at least I'm cute, right? 😄💖
							</p>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-around w-1/2">
					<div className="flex items-center gap-2">
						<input type="radio" id="poem" name="category" value="poem" />
						<label htmlFor="poem" className="text-lg font-semibold">
							Poem
						</label>
					</div>
					<div className="flex items-center gap-2">
						<input type="radio" id="story" name="category" value="story" />
						<label htmlFor="story" className="text-lg font-semibold">
							Story
						</label>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center gap-4 w-full">
				<div className="flex flex-col w-10/12">
					<label htmlFor="whoFor">Who is this for?</label>
					<input
						type="text"
						className="py-2 px-4"
						id="whoFor"
						placeholder="Dumbo, Chikku, Mikki"
					/>
				</div>
				<div className="flex flex-col w-10/12">
					<label htmlFor="yourName">Your Name?</label>
					<input
						type="text"
						className="py-2 px-4"
						id="yourName"
						placeholder="Your one in a million friend"
					/>
				</div>
				<div className="flex flex-col w-10/12">
					<label htmlFor="moreInfo">Tell us more...</label>
					<textarea
						className="p-4 resize-none"
						placeholder="Hey Dumbo! Happy Belated Birthday!🥳"
					></textarea>
				</div>
				<button className="bg-baby-orange-500 py-2 px-8 rounded-md font-bold text-white">
					Dift it!
				</button>
			</div>
		</main>
	);
}

export default App;
