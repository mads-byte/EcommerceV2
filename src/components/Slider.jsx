import React from 'react';
import "./Slider.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
import img1 from "/products/suitcase1.avif"
import img2 from "/products/suitcase2.avif"
import img3 from "/products/suitcase3.avif"



function Slider() {
    const [index, setIndex] = React.useState(0);
    const images = [img1, img2, img3];
    // no direct DOM manipulation; render images and control visibility via state


    return (
        <div className="slider">
            <div className="slides">
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`slide ${i + 1}`}
                        style={{ display: i === index ? "block" : "none" }}
                    />
                ))}
            </div>
            <button
                className="prev"
                onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}
                aria-label="Previous"
            ><FontAwesomeIcon icon="arrow-left" />
            </button>
            <button
                className="next"
                onClick={() => setIndex((prev) => (prev + 1) % images.length)}
                aria-label="Next"
            ><FontAwesomeIcon icon="arrow-right" />
            </button>
        </div>
    )
};




export default Slider
