import React from 'react';
import ComplexityHeatmap from './ComplexityHeatmap';
import SmallMultiples from './SmallMultiples';

function GeneralStats(props) {
    return (
        <div style={{width: '80%', marginTop: '30px'}}>
            <section className="standard-header">
                General Statistics and Comparisons between different sorting algorithms:
            </section>

            <br></br>
            <br></br>
            <ComplexityHeatmap />
            <div style={{marginBottom: '20px'}}>
            <section className="standard-header">
                Time complexity of the sorting algorithms for different cases
            </section>
            </div>
            
            <br></br>
            <SmallMultiples />
        </div>
    );
}

export default GeneralStats;