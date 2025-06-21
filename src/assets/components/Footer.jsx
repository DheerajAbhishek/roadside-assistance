import { Link } from 'react-router-dom';
export default function Footer() {

    return (
        <>
            <footer>
                <div id="contact">
                    <div>
                        <h3>Telephone &nbsp;&nbsp;&nbsp; </h3>
                        <h3>Email </h3>
                        <div id="links">
                            <div id="media">
                                <img src="https://media.atherenergy.com/instagram.svg" alt="" />
                                <img src="https://media.atherenergy.com/twitter.svg" alt="" />
                                <img src="https://media.atherenergy.com/facebook.svg" alt="" />
                                <img src="https://media.atherenergy.com/linkedin.svg" alt="" />
                            </div>
                            <div>
                                <a className="x" href="https://www.instagram.com/">instagram</a>
                                <a className="x" href="https://x.com/">twitter</a>
                                <a className="x" href="https://www.facebook.com/">facebook</a>
                                <a className="x" href="https://in.linkedin.com/">linkedin</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>9398366756</h3>
                        <h3>dheerajabhishek111@gmail.com</h3>
                    </div>
                </div>
                <div id="footerservices">
                    <h3>Services</h3>
                    <Link id="home" to="/">Home</Link>
                    <Link id="service" to="/service">RequestService</Link>
                    <Link id="FeedBack" to="/feedback">Feedback</Link>
                    <Link id="About" to="/about">About</Link>
                </div>
            </footer>
        </>
    )
}