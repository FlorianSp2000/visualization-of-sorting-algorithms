import Chart from "react-apexcharts";
import React, { Component } from "react";

class RandomMergesort extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
            {
            name: "Comparisons",
            data: [
                {'x': 8, 'y': 78},
                {'x': 16, 'y': 205},
                {'x': 32, 'y': 519},
                {'x': 64, 'y': 1227},
                {'x': 128, 'y': 2819},
                {'x': 256, 'y': 6451},
                {'x': 512, 'y': 14324},
                {'x': 1024, 'y': 31719},
                {'x': 2048, 'y': 69520},
                {'x': 4096, 'y': 151515},
                {'x': 8192, 'y': 327517},
                {'x': 16384, 'y': 703896},
                {'x': 32768, 'y': 1506080},
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
            text: 'Mergesort on random data',
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

export default RandomMergesort;


