import Chart from "react-apexcharts";
import React, { Component } from "react";

class AscendingSelectionsort extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
            {
            name: "Runtime in ms",
            data: [
                {'x': 1024, 'y': 0.162},
                {'x': 2048, 'y': 0.530},
                {'x': 4096, 'y': 1.882},
                {'x': 8192, 'y': 7.114},
                {'x': 16384, 'y': 27.888},
                {'x': 32768, 'y': 107.985},
                {'x': 65536, 'y': 434.026},
                {'x': 131072, 'y': 1729.812},
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
            text: 'Selectionsort on random data',
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
            max: 140000,
            tickAmount: 7,
          },
          yaxis: {
            title: {
                text: "Runtime (ms)"
            },
            labels: {
                formatter: function(val) {
                    return val.toFixed(0);
                }
            },               
            min: 0,
            max: 2000,
            tickAmount: 10
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

export default AscendingSelectionsort;


