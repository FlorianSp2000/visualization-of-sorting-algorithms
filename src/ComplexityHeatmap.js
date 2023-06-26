import React, { Component } from "react";
import Chart from "react-apexcharts";

class ComplexityHeatmap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false,
          },
          fontFamily: 'Segoe UI'
        },
        //   default_bar_color = "#f0e442";//"rgb(240,228,66)";
        //   finished_bar_color = "#009e73";//"rgb(0,158,115)";
        //   pivot_bar_color = "#0072b2";//"rgb(0,114,178)";
        //   left_running_bar_color = "#d55e00";//"rgb(213,94,0)";
        //   right_running_bar_color = "#cc79a7";//"rgb(204,121,167)";          
        colors: ["#f0e442", "#009e73", "#0072b2", "#d55e00", "#cc79a7"],
        xaxis: {
          categories: ["Best Case", "Average Case", "Worst Case"],
          labels: {
            style: {
              fontSize: 18,
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              fontSize: 15,
            }
          }          
        },
        tooltip: {
          enabled: false,
        },
        title: {
          align: "center",
          offsetX: 20,
          text: "Complexity Heatmap",
          style: {
            fontSize: '18px',    
          },

        },
        dataLabels: {
          style: {
            colors: ["#000"],
            fontSize: 15
          },
          formatter: function (val, opts) {
            switch(val) {
              case 1:
                  return 'Ω(N^2)'

              case 2:
                return 'Θ(N^2)'

              case 3:
                return 'O(N^2)'

                case 11:
                  return 'O(N log(N))'
                
                case 9:
                  return 'Ω(N log(N))'
                  
                case 10:
                  return 'Θ(N log(N))'
              
                case 17:
                  return 'Ω(N)'
    
              }
          },
        }
      },
      series: [
        {
          name: "Insertion Sort",
        data: [{
          x: 'W1',
          y: 17//
        }, {
          x: 'W2',
          y: 2//
        }, {
          x: 'W3',
          y: 3//
        }, 
      ]
    },
    {
      name: "Merge Sort",
      data: [{
        x: 'W1',
        y: 9//
      }, {
        x: 'W2',
        y: 10//
      }, {
        x: 'W3',
        y: 11//
      }, 
    ]
  },
    {
      name: "Quick Sort",
      data: [{
          x: 'W1',
          y: 9//
        }, {
          x: 'W2',
          y: 10//
        }, {
          x: 'W3',
          y: 3//
        }, 
      ]
    },
    
    {
      name: "Bubble Sort",
      data: [{
        x: 'W1',
        y: 17//
      }, {
        x: 'W2',
        y: 2//
      }, {
        x: 'W3',
        y: 3//
      }, 
    ]
    },
    {
      name: "Selection Sort",
      data: [{
        x: 'W1',
        y: 1
      }, {
        x: 'W2',
        y: 2
      }, {
        x: 'W3',
        y: 3
      }, 
    ]
    },
  ]
};
}

render() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginBottom: "30px"}}>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="heatmap"
              width="1000"
              height="400"
            />
          </div>
    );
  }
}

export default ComplexityHeatmap;

