import React from 'react';
import { useState } from 'react'
import "./Slider.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
import img1 from "/products/suitcase1.avif"
import img2 from "/products/suitcase2.avif"
import img3 from "/products/suitcase3.avif"


function Slider() {
    const [index, setIndex] = useState(0);
    const images = [img1, img2, img3];
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img src={img1}></img>
                    <Carousel.Caption>
                        <h3>Voyage Carry-On</h3>
                        <p>Navy blue hard shell carry-on</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2}></img>
                    <Carousel.Caption>
                        <h3>Autumn Pro Carry-On</h3>
                        <p>Soft herringbone carry-on</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3}></img>
                    <Carousel.Caption>
                        <h3>Pack Pro Luxe</h3>
                        <p>
                            Dark brown hard shell carry-on
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
};




export default Slider
