import "../styles/Home.css";
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <div id="RA">
                <img id="logo" src={logo} alt="Logo" className="navbar-logo" />
                <h5>Roadside Help</h5>
            </div>
            <div id="center">
                <Link id="home" to="/">Home</Link>
                <Link id="service" to="/service">RequestService</Link>
                <Link id="FeedBack" to="/feedback">Feedback</Link>
                <Link id="About" to="/about">About</Link>
            </div>
        </nav>
    );
}
