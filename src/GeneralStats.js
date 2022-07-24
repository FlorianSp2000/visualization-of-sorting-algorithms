import React from 'react';
import ComplexityHeatmap from './ComplexityHeatmap';
import SmallMultiples from './SmallMultiples';

function GeneralStats(props) {
    return (
        <div>
            <hr></hr>
            General Statistics and Comparisons between different sorting algorithms:

            <br></br>
            <br></br>
            <ComplexityHeatmap />
            <SmallMultiples />
        </div>
    );
}

export default GeneralStats;