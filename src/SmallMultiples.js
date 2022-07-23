import Chart from "react-apexcharts";
import React, { Component } from "react";
import UnsortedSelectionBubble from "./Charts/UnsortedSelectionBubble";
import SortedSelectionBubble from "./Charts/SortedSelectionBubble";


class SmallMultiples extends Component {
    constructor(props) {
      super(props);

      this.state = {
        
      };
    }

  

    render() {
      return (
        

                <div className="small-multiple-grid">
                    <UnsortedSelectionBubble />
                    <SortedSelectionBubble /> 
                </div>

);
}
}

export default SmallMultiples;


