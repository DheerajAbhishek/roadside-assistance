import { useEffect, useRef, useState } from "react";
import "../styles/Service.css";
import petrol from "../images/petrol.jpeg";
import gear from "../images/gear.jpeg";
import ev from "../images/ev.jpeg";
import b from "../images/B.jpg";
import Nav from "./Nav";
import Footer from "./Footer"
export default function Service() {



    const locateRef = useRef(null);
    const clearRef = useRef(null);
    const inputRef = useRef(null);
    const mapRef = useRef(null);
    const userMapRef = useRef(null);
    const hmapRef = useRef(null);
    const sectionRef = useRef(null);

    const fuelFormRef = useRef(null);
    const mechFormRef = useRef(null);
    const evFormRef = useRef(null);

    const petrolBtn = useRef(null);
    const mechBtn = useRef(null);
    const evBtn = useRef(null);

    const pmapBtn = useRef(null);
    const mmapBtn = useRef(null);
    const evmapBtn = useRef(null);

    const [coords, setCoords] = useState({ latitude: 0, longitude: 0 });
    const [text, setText] = useState("");

    useEffect(() => {
        const locate = locateRef.current;
        const clear = clearRef.current;
        const input = inputRef.current;
        const map = mapRef.current;
        const userMap = userMapRef.current;
        const hmap = hmapRef.current;
        const section = sectionRef.current;

        const p = document.createElement("p");
        let latitude = 0;
        let longitude = 0;

        const enableButtons = () => {
            petrolBtn.current.disabled = false;
            mechBtn.current.disabled = false;
            evBtn.current.disabled = false;
            pmapBtn.current.disabled = false;
            mmapBtn.current.disabled = false;
            evmapBtn.current.disabled = false;
        };

        const disableButtons = () => {
            petrolBtn.current.disabled = true;
            mechBtn.current.disabled = true;
            evBtn.current.disabled = true;
        };

        const handleLocate = () => {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    latitude = pos.coords.latitude;
                    longitude = pos.coords.longitude;
                    setCoords({ latitude, longitude });

                    enableButtons();
                    hmap.classList.add("dontshow");

                    p.innerText = `latitude=${latitude} longitude=${longitude}`;
                    p.classList.add("posi");
                    section.appendChild(p);

                    fuelFormRef.current.action += `/@${latitude},${longitude},14z?entry=ttu`;
                    mechFormRef.current.action += `/@${latitude},${longitude},14z?entry=ttu`;
                    evFormRef.current.action += `/@${latitude},${longitude},14z?entry=ttu`;

                    alert("Location found successfully!");

                    userMap.classList.add("show");
                    userMap.src = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.93369209369!2d${longitude}!3d${latitude}!3m2!1i1024!2i768!4f20.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1695576098947!5m2!1sen!2sin`;
                },
                (err) => {
                    alert("Can't find your location. Check permission or connection.");
                    console.error(err);
                }
            );
        };

        const handleInput = (e) => {
            const val = e.target.value;
            setText(val);

            if (val.length === 0) {
                disableButtons();
                return;
            }
            enableButtons();

            fuelFormRef.current.onsubmit = () => {
                fuelFormRef.current.action += `+${val}/14z?entry=ttu`;
            };
            mechFormRef.current.onsubmit = () => {
                mechFormRef.current.action += `+${val}/14z?entry=ttu`;
            };
            evFormRef.current.onsubmit = () => {
                evFormRef.current.action += `+${val}/14z?entry=ttu`;
            };
        };

        const clearInput = () => {
            input.value = "";
            disableButtons();
        };

        const setMap = (type) => {
            map.classList.add("show");
            userMap.classList.add("dontshow");
            map.src = `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30386.435928125167!2d${coords.longitude}!3d${coords.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s${type}%20stations%20near!5e0!3m2!1sen!2sin!4v1727231648815!5m2!1sen!2sin`;
        };

        locate.addEventListener("click", handleLocate);
        input.addEventListener("input", handleInput);
        clear.addEventListener("click", clearInput);
        pmapBtn.current.addEventListener("click", () => setMap("gas"));
        mmapBtn.current.addEventListener("click", () => setMap("mechanic"));
        evmapBtn.current.addEventListener("click", () => setMap("ev"));

        return () => {
            // Cleanup if needed
        };
    }, [coords]);

    return (
        <>
            <Nav />
            <div style={{ backgroundImage: `url(${b})` }} id="sec" ref={sectionRef}>

                <h2 id="loch2">Enter current location</h2>
                <input ref={inputRef} type="text" id="text" placeholder="Enter location/place" required />
                <button ref={clearRef} id="clear">Clear</button>
                <button ref={locateRef} id="location">Find my location</button>

                <div id="parentfrom">
                    <h1 className="serviceh1">Select any one service</h1>
                    <div id="opt">
                        <div className="Select">
                            <img id="lpetrol" src={petrol} alt="fuel" />
                            <form ref={fuelFormRef} id="fuel" action="https://www.google.com/maps/search/petrol+bunks+near">
                                <h4>Nearby fuel Pumps</h4>
                                <button ref={petrolBtn} id="petrol" className="search" disabled>Search</button>
                            </form>
                            <button ref={pmapBtn} className="maps" id="pmap" disabled>Show in map</button>
                        </div>

                        <div className="Select">
                            <img id="lmechanic" src={gear} alt="mechanic" />
                            <form ref={mechFormRef} id="mech" action="https://www.google.com/maps/search/mechanic+shops+near">
                                <h4>Nearby Mechanics</h4>
                                <button ref={mechBtn} id="mechanic" className="search" disabled>Search</button>
                            </form>
                            <button ref={mmapBtn} className="maps" id="mmap" disabled>show in map</button>
                        </div>

                        <div className="Select">
                            <img id="lev" src={ev} alt="ev" />
                            <form ref={evFormRef} id="fev" action="https://www.google.com/maps/search/ev+stations+near">
                                <h4>Nearby EV chargers</h4>
                                <button ref={evBtn} id="ev" className="search" disabled>search</button>
                            </form>
                            <button ref={evmapBtn} className="maps" id="evmap" disabled>show in map</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 id="hmap" ref={hmapRef}>Press Find My Location To Display Map</h2>
            </div>

            <iframe ref={mapRef} id="map" src="" width="1520" height="450" allowFullScreen loading="lazy" />
            <iframe ref={userMapRef} className="userloc" src="" width="1520" height="450" allowFullScreen loading="lazy" />
            <Footer />

        </>
    );
}
