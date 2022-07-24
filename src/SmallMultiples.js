import Chart from "react-apexcharts";
import React, { Component } from "react";
import AscendingMergesort from "./Charts/AscendingMergesort";
import DescendingMergesort from "./Charts/DescendingMergesort";
import RandomMergesort from "./Charts/RandomMergesort";
import AscendingBubblesort from "./Charts/AscendingBubblesort";
import DescendingBubblesort from "./Charts/DescendingBubblesort";
import RandomBubblesort from "./Charts/RandomBubblesort";
import AscendingSelectionsort from "./Charts/AscendingSelectionsort";
import DescendingSelectionsort from "./Charts/DescendingSelectionsort";
import RandomSelectionsort from "./Charts/RandomSelectionsort";
import AscendingInsertionsort from "./Charts/AscendingInsertionsort";
import DescendingInsertionsort from "./Charts/DescendingInsertionsort";
import RandomInsertionsort from "./Charts/RandomInsertionsort";
import AscendingQuicksortMed3 from "./Charts/AscendingQuicksortMed3";
import DescendingQuicksortMed3 from "./Charts/DescendingQuicksortMed3";
import RandomQuicksortMed3 from "./Charts/RandomQuicksortMed3";


class SmallMultiples extends Component {
    constructor(props) {
      super(props);

      this.state = {
        
      };
    }

  

    render() {
      return (
        
<div>
                <div className="small-multiple-grid">
                    <AscendingSelectionsort/>                  
                    <DescendingSelectionsort/>
                    <RandomSelectionsort/>
                </div>                   
                <div className="small-multiple-grid">
                    <AscendingBubblesort/>                  
                    <DescendingBubblesort/>
                    <RandomBubblesort/>
                </div>    
                <div className="small-multiple-grid">
                    <AscendingQuicksortMed3/>                  
                    <DescendingQuicksortMed3/>
                    <RandomQuicksortMed3/>
                </div>                 
                <div className="small-multiple-grid">
                    <AscendingMergesort/>                  
                    <DescendingMergesort/>
                    <RandomMergesort/>
                </div>        
                <div className="small-multiple-grid">
                    <AscendingInsertionsort/>                  
                    <DescendingInsertionsort/>
                    <RandomInsertionsort/>
                </div>                                                                        
                      
</div>

           

);
}
}

export default SmallMultiples;


