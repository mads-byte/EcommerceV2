import Slider from "./components/Slider";
import { NavLink } from "react-router-dom";
import './Home.css'
function Home() {
    return (

        <section>
            <img className="hero-img" src={'wtHero.jpg'}></img>


            <div className="for-you--section">
                <div className="for-you--image"><img alt="open carry-on bag showing its compartments" src="luggage-for-you.avif"></img>
                </div>
                <div className="for-you--description">Luxury luggage made with you in mind. Suitcases made with practical solutions
                    to safely and securely carry essentials without sacrificing style.</div>
            </div>
            <h1 className="featured-header">Featured This Season</h1>
            <Slider />
            <div>
                <NavLink aria-label="Go to the shopping page" to="/shop"><button className="start-shopping">Start
                    Shopping</button></NavLink>
            </div>
        </section >
    );
}

export default Home;
