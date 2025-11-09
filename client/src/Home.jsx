import Slider from "./components/Slider";
import { NavLink } from "react-router-dom";
import './Home.css'
import heroImg from "/wtHero.jpg"
import forYou from "/luggage-for-you.avif"
function Home() {
    return (

        <section>
            <img className="hero-img" src={heroImg}></img>


            <div className="for-you--section">
                <div className="for-you--image">
                    <h1 className="for-wherever">For Wherever You're Going.</h1>
                    <img alt="open carry-on bag showing its compartments" src={forYou}></img>
                </div>
                <div className="for-you--featured">
                    <h1 className="for-you--featured__header">Featured This Season</h1>
                    <Slider />
                </div>
            </div>
            <div className="bottom-section">
                <div className="for-you--description">Luxury luggage made with you in mind. Suitcases made with practical solutions
                    to safely and securely carry essentials without sacrificing style.</div>
                <div>
                    <NavLink aria-label="Go to the shopping page" to="/shop"><button className="start-shopping">Start
                        Shopping</button></NavLink>
                </div>
            </div>
        </section >
    );
}

export default Home;
