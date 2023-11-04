import "./App.css";
import { Link } from "react-router-dom";
import GenerateMessage from "./GenerateMessage";
import Title from "./Components/LandingPageComponents/Title";
import Feature1 from "./Components/LandingPageComponents/Feature1";
import Feature2 from "./Components/LandingPageComponents/Feature2";
import Feature3 from "./Components/LandingPageComponents/Feature3";
import Feature4 from "./Components/LandingPageComponents/Feature4";
import Footer from "./Components/LandingPageComponents/footer";

function App(){
	return (
		<div>
			<Landing></Landing>
		</div>
	)
}

function Landing(){
	return (
		<>
		  <Title></Title>
		  <Feature1></Feature1>
		  <Feature2></Feature2>
		  <Feature3></Feature3>
		  <Feature4></Feature4>
		  <Footer></Footer>
		</>
	  );
}

export default App;
