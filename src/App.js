import './App.css';
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

function App() {
	return (
	<div className="App">
		{/* <header className="App-header">
			
		</header> */}
		<Nav />
		<Promo />
		<div className="intros">
			<Intro />
			<Intro />
			<Intro />
		</div>
		<Footer />
	</div>
	);
}

export default App;
