import React from 'react';
import Carousel from './Carousel';
import TimeUntil from './TimeUntil';

const Features = () => {
    return (
        <div style={{position: 'relative'}}>
            <Carousel />
            <div className="artist_name">
                <div className="wrapper">
                    Arianna Grande
                </div>
            </div>
            <TimeUntil />

        </div>
    );
};

export default Features;