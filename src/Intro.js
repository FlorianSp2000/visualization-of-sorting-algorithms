import React from 'react';
import TuftyGifs from './TuftyGifs'

const Intro = () => {
    return (
        <>
        <div style={{marginBottom: '12px'}}>
            Sorting Algorithms are often used as one of the introductory topics within computer science.
            Since it is such a foundational but still large topic appropriate visualizations are necessary
            to ease the learning process.
        </div>
        <TuftyGifs />
        <div>
            Definition: 
                Sorting is a very classic problem of reordering comparable items into a certain order.
        </div>
        </>
    );
};

export default Intro;