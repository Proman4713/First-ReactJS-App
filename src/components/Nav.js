import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<>
			<nav className="main-nav">
				<p className="link navButton">
					<FontAwesomeIcon icon={faBars} />
				</p>
					{/*<li className="active">*/}
						{/* <img src={logo} className="App-logo" alt="logo" style={{ width: "60px", height: "60px", display: 'inline' }} /> */}
					{/*</li>*/}
				<ul>
					<Link to="/" style={{ all: "unset" }}>
						<li>
							Home
						</li>
					</Link>
					<Link to="/faq" style={{ all: "unset" }}>
						<li>
							FAQ
						</li>
					</Link>
					<Link to="/about" style={{ all: "unset" }}>
						<li>
							About
						</li>
					</Link>
					<Link to="/contact" style={{ all: "unset" }}>
						<li>
							Contact
						</li>
					</Link>
				</ul>
			</nav>
		</>
	);
}