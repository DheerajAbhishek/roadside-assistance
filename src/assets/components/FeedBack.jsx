import "../styles/FeedBack.css";
import Nav from "./nav";
import Footer from "./Footer";
export default function FeedBack() {
    return (
        <>
            <Nav />
            <h1 className="FBh1">YOUR FEEDBACK IS IMPORTANT TO US</h1>
            <form className="FBform" action="">
                <input id="x" type="text" placeholder="FeedBack" />
                <button className="FBbutton">Submit FeedBack</button>
            </form>

            <Footer />
        </>
    );
}