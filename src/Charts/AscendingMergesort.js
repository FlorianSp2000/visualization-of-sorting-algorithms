import Chart from "react-apexcharts";
import React, { Component } from "react";

class AscendingMergesort extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
            {
            name: "Comparisons",
            data: [
                {'x': 8, 'y': 69},
                {'x': 16, 'y': 173},
                {'x': 32, 'y': 413},
                {'x': 64, 'y': 957},
                {'x': 128, 'y': 2173},
                {'x': 256, 'y': 4861},
                {'x': 512, 'y': 10749},
                {'x': 1024, 'y': 23549},
                {'x': 2048, 'y': 51197},
                {'x': 4096, 'y': 110589},
                {'x': 8192, 'y': 237565},
                {'x': 16384, 'y': 507901},
                {'x': 32768, 'y': 1081341},
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
            text: 'Mergesort on ascending data',
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

export default AscendingMergesort;


