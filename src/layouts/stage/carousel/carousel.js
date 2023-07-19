import React, {useState} from 'react';
import './carousel.scss'
import Card from "./card/card";
import Slider from "./slider/slider";


function Carousel(props) {
    const [selected,setSelected] = useState(1)

    return (
        <div className="carousel-container">
            <div className="card-section">
                <Card selected={selected} />
            </div>
            <div className="slider-container">
                <Slider />
            </div>
        </div>
    );
}

export default Carousel;