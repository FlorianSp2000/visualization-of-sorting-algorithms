import Chart from "react-apexcharts";
import React, { Component } from "react";
import UnsortedSelectionBubble from "./Charts/UnsortedSelectionBubble";
import SortedSelectionBubble from "./Charts/SortedSelectionBubble";
import AscendingMergesort from "./Charts/AscendingMergesort";
import DescendingMergesort from "./Charts/DescendingMergesort";
import RandomMergesort from "./Charts/RandomMergesort";


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
                    <UnsortedSelectionBubble />
                    <SortedSelectionBubble /> 

                </div>
                <div className="small-multiple-grid">
                    <AscendingMergesort/>                  
                    <DescendingMergesort/>
                    <RandomMergesort/>
                </div>
</div>

           

);
}
}

export default SmallMultiples;


