import './App.css';
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
	<div className="App">
		{/* <header className="App-header">
			
		</header> */}
		<Nav />
		<Promo />
		<div className="intros">
			<Routes>
				<Route path='/' element={<Intro title="Home" description="Home page" />} />
				<Route path='/about' element={<Intro title='About' description='About this page' />} />
				<Route path='/faq' element={<Intro title='FAQ' description='Frequently Asked Questions' />} />
				<Route path='/contact' element={<Intro title='Contact' description='Get in touch' />} />
			</Routes>
		</div>
		<Footer />
	</div>
	);
}

export default App;
