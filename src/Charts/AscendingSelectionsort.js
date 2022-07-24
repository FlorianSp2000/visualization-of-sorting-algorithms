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
                {'x': 1024, 'y': 0.115},
                {'x': 2048, 'y': 0.426},
                {'x': 4096, 'y': 1.645},
                {'x': 8192, 'y': 6.611},
                {'x': 16384, 'y': 26.768},
                {'x': 32768, 'y': 105.355},
                {'x': 65536, 'y': 424.329},
                {'x': 131072, 'y': 1714.145},
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
            text: 'Selectionsort on ascending data',
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


