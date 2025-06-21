import "../styles/About.css";
import clock from "../images/stopwatch.png";
import wrench from "../images/wrench.png";
import loc from "../images/loc.png";
import Nav from "./Nav";
import Footer from "./Footer";
import tow from "../images/tow.png";
import road from "../images/road.png";

export default function About() {
    return (
        <>
            <Nav />
            <section>

                <div class="paras" id="left">
                    <div>
                        <h1 className="abth1"> About Us</h1>
                        <p>Welcome to our web-based platform, your reliable companion for finding the nearest petrol bunks,
                            mechanic
                            shops, and electric vehicle charging stations. Our mission is to ensure that help is always within
                            reach,
                            enhancing the safety and convenience of your travels.
                        </p>
                    </div>
                    <img src={wrench} alt="wrench" />
                </div>
                <div class="paras">
                    <img src={loc} alt="location" />
                    <div>
                        <h2> Our Platform</h2>

                        <p>We utilize advanced geolocation technology to provide you with a comprehensive list of nearby petrol
                            bunks,
                            mechanic shops, and electric vehicle charging stations. Each listing includes essential details such
                            as
                            contact information, location, and distance from your current position.
                        </p>
                    </div>

                </div>

                <div id="left" class="paras">
                    <div>
                        <h2> Why Choose Us?</h2>
                        <p>Traditional roadside assistance services often fall short due to their limited geographic reach,
                            leaving
                            travelers stranded and stressed. Our platform addresses this gap by leveraging GPS technology to
                            connect
                            you
                            with nearby service providers, including fuel delivery and mobile mechanics, within a certain
                            radius.
                        </p>
                    </div>
                    <img className="ABTimg" src={tow} alt="tow" />
                </div>

                <div class="paras">
                    <img className="ABTimg" src={road} alt="road" />
                    <div>
                        <h2> How It Works</h2>
                        <p>Simply input your location or we'll automatically locate you,and our system will quickly search for
                            and
                            display available services in your vicinity. You'll receive contact details and estimated arrival
                            times
                            for
                            each service provider, ensuring a swift and efficient response to your needs.</p>
                    </div>

                </div>

                <div id="left" class="paras">
                    <div>
                        <h2> Our Commitment</h2>
                        <p>We are dedicated to reducing your waiting time for assistance and enhancing your travel safety. With
                            our
                            real-time solution, you can travel with peace of mind, knowing that help is always just a few clicks
                            away.

                            Thank you for choosing our platform. We are here to support you on every journey.

                            Feel free to customize this text further to better match your brand's voice and style. If you need
                            any
                            more
                            adjustments or additional sections, just let me know!</p>
                    </div>
                    <img className="ABTimg" id="clock" src={clock} alt="" />
                </div>
            </section>
            <Footer />
        </>
    )
};
