import "../styles/Home.css";
import Nav from "./Nav";
import Footer from "./Footer"
import bg from "../images/bg.jpg";
export default function Home() {
    return (
        <>
            <Nav />
            <header style={{ backgroundImage: `url(${bg})` }}>
                {/* header */}
                <div id="main" >
                    <h1 className="homeh1">
                        Emergency<br />
                        Road Service
                    </h1>
                    <form action="RAservice.html">
                        <button className="homebutton">Find Assistance</button>
                    </form>
                </div>
            </header>
            <Footer />
        </>
    );
}