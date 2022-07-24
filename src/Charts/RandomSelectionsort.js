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
          tooltip: {
            y: {
                formatter: function(val) {
                    return val;
                },
            },            
          },             
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Selectionsort, random data',
            align: 'center'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          colors: ["#0072b2"],           
          annotations: {
            position: "back",
            yaxis: [
                {
                    y: 0,
                    y2: 0.1,
                    fillColor: "#f0e442"
                },
                {
                    y: 0.1,
                    y2: 2,
                    fillColor: "#d55e00"
                },
                {
                    y: 2,
                    y2: 10,
                    // fillColor: "#009e73"
                    fillColor: "#ffffff"
                },
                {
                    y: 10,
                    y2: 1000,
                    fillColor: "#009e73"
                },                
                {
                    y: 1000,
                    y2: 2000,
                    fillColor: "#cc79a7"
                }                                   
            ]
        },                 
        xaxis: {
            title: {
                text: "Array size"
            },
            labels: {
                formatter: function(val) {
                    if (val==0) {
                        return "0"
                    }
                    return (val/1000).toFixed(0) + ",000";
                }
              },             
            min: 0,
            max: 150000,
            tickAmount: 3,
          },
          yaxis: {
            title: {
                text: "Runtime (ms)"
            },
            labels: {
                formatter: function(val) {
                    if (val==0) {
                        return "0";
                    }
                    return (val/1000).toFixed(0) + ",000";
                }
            },                   
            min: 0,
            max: 2000,
            tickAmount: 2
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
              width="350"
              height="250"
            />

);
}
}

export default AscendingSelectionsort;


