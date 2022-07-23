import Chart from "react-apexcharts";
import React, { Component } from "react";

class SortedSelectionBubble extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
            {
            name: "Selection Sort",
            data: [10, 41, 35, 51, 49]
        },
        {
            name: "Bubble Sort",
            data: [1, 46, 31, 57, 41]
        },

    ],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Sorted Case',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['100,000', '200,000', '300,000', '400,000', '500,000'],
          }
        },
      
      
      };
    }

  

    render() {
      return (
        
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />

);
}
}

export default SortedSelectionBubble;


