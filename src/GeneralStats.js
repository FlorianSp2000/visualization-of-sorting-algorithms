import React from 'react';
import ComplexityHeatmap from './ComplexityHeatmap';
import SmallMultiples from './SmallMultiples';

function GeneralStats(props) {
    return (
        <div style={{width: '80%'}}>
            <hr></hr>
            General Statistics and Comparisons between different sorting algorithms:

            <br></br>
            <br></br>
            <ComplexityHeatmap />
            <div style={{marginBottom: '20px'}}>
            Time complexity of the sorting algorithms for different cases
            </div>
            
            <br></br>
            <SmallMultiples />
        </div>
    );
}

export default GeneralStats;