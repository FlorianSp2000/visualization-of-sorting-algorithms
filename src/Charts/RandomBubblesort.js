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
        //   default_bar_color = "#f0e442";//"rgb(240,228,66)";
        //   finished_bar_color = "#009e73";//"rgb(0,158,115)";
        //   pivot_bar_color = "#0072b2";//"rgb(0,114,178)";
        //   left_running_bar_color = "#d55e00";//"rgb(213,94,0)";
        //   right_running_bar_color = "#cc79a7";//"rgb(204,121,167)";          
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
                    return val.toFixed(0);
                }
            },            
            min: 0,
            max: 21000,
            tickAmount: 3
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
              width="350"
              height="250"
            />

);
}
}

export default RandomBubblesort;


