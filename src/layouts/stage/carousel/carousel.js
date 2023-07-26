import React, {useState} from 'react';
import './carousel.scss'
import Card from "./card/card";
import Slider from "./slider/slider";

function Carousel(props) {
    const [isFlipped,hadleClick]=useState(false)

    return (
        <div className="carousel-container">
            <div className="card-section">
                <Card isFlipped={isFlipped} hadleClick={hadleClick}   />
            </div>
            <div className="slider-container">
                <Slider  flipCard={hadleClick}/>
            </div>
        </div>
    );
}

export default Carousel;