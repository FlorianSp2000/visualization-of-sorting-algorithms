import Chart from "react-apexcharts";
import React, { Component } from "react";

class RandomBubblesort extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
            {
            name: "Runtime in ms",
            data: [
                {'x': 1024, 'y': 0.947},
                {'x': 2048, 'y': 3.604},
                {'x': 4096, 'y': 13.132},
                {'x': 8192, 'y': 61.731},
                {'x': 16384, 'y': 294.641},
                {'x': 32768, 'y': 1272.065},
                {'x': 65536, 'y': 5196.817},
                {'x': 131072, 'y': 20903.544},
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
            text: 'Bubblesort on random data',
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
            max: 21000,
            tickAmount: 7
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

export default RandomBubblesort;


