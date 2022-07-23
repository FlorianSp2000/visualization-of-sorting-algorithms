import Chart from "react-apexcharts";
import React, { Component } from "react";

class DescendingMergesort extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
            {
            name: "Comparisons",
            data: [
                {'x': 8, 'y': 76},
                {'x': 16, 'y': 188},
                {'x': 32, 'y': 444},
                {'x': 64, 'y': 1020},
                {'x': 128, 'y': 2300},
                {'x': 256, 'y': 5116},
                {'x': 512, 'y': 11260},
                {'x': 1024, 'y': 24572},
                {'x': 2048, 'y': 53244},
                {'x': 4096, 'y': 114684},
                {'x': 8192, 'y': 245756},
                {'x': 16384, 'y': 524284},
                {'x': 32768, 'y': 1114108},
            ]
        },

    ],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
            toolbar: {
                show: false,
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Mergesort on descending data',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            title: {
                text: "Array size"
            },
            min: 0,
            max: 35000,
            tickAmount: 7,
          },
          yaxis: {
            title: {
                text: "Comparison count"
            },
            min: 0,
            max: 1600000,            
          }
        //   xaxis: {
        //     categories: ['100,000', '200,000', '300,000', '400,000', '500,000'],
        //   }
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

export default DescendingMergesort;


