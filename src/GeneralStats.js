import React from 'react';
import ComplexityHeatmap from './ComplexityHeatmap';
import SmallMultiples from './SmallMultiples';

function GeneralStats(props) {
    return (
        <div>
            <hr></hr>
            General Statistics and Comparisons between different sorting algorithms
            <br></br>
            Idea1: Run Different Algorithms on same dataset and make a race bar / line chart on their number of comparisons
            <br></br>
            {/* <ComplexityHeatmap /> */}
            <SmallMultiples />
        </div>
    );
}

export default GeneralStats;