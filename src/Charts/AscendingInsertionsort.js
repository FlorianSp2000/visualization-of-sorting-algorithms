import Chart from "react-apexcharts";
import React, { Component } from "react";

class AscendingInsertionsort extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
            {
            name: "Runtime in ms",
            data: [
                {'x': 1024, 'y': 0.002},
                {'x': 2048, 'y': 0.003},
                {'x': 4096, 'y': 0.006},
                {'x': 8192, 'y': 0.011},
                {'x': 16384, 'y': 0.021},
                {'x': 32768, 'y': 0.042},
                {'x': 65536, 'y': 0.084},
                {'x': 131072, 'y': 0.168},
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
            text: 'Insertionsort on ascending data',
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
            min: 0,
            max: 1,
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

export default AscendingInsertionsort;


