import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
	return (
		<>
			<nav className="main-nav">
				<p className="link navButton">
					<FontAwesomeIcon icon={faBars} />
				</p>
					{/*<li className="active">*/}<img src={logo} className="App-logo" alt="logo" style={{ width: "60px", height: "60px", display: 'inline' }} />{/*</li>*/}
				<ul>
					<li>Articles</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</>
	);
}