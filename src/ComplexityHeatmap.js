import React, { Component } from "react";
import Chart from "react-apexcharts";

class ComplexityHeatmap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Best Case", "Average Case", "Worst Case"]
        },
        tooltip: {
          enabled: false,
        },
        title: {
          text: "Complexity Heatmap",
          style: {
            fontSize: '18px'
          }
        },
        dataLabels: {
            formatter: function (val, opts) {
              console.log("val", val)
              console.log("opts", opts)
              switch(val) {
                case 1:
                    return 'Ω(N^2)'

                case 2:
                  return 'Θ(N^2)'

                case 3:
                  return 'O(N^2)'

                  case 4:
                    return 'O(N log(N))'
                  
                  case 5:
                    return 'Ω(N log(N))'
                    
                  case 6:
                    return 'Θ(N log(N))'
                
                  case 7:
                    return 'Ω(N)'
      
                }
          },
        }
      },
      series: [
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
        {
          name: "Bubble Sort",
          data: [{
            x: 'W1',
            y: 7//
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
            name: "Quick Sort",
            data: [{
              x: 'W1',
              y: 5//
            }, {
              x: 'W2',
              y: 6//
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
            y: 5//
          }, {
            x: 'W2',
            y: 6//
          }, {
            x: 'W3',
            y: 4//
          }, 
      ]
      },
      {
        name: "Insertion Sort",
        data: [{
          x: 'W1',
          y: 7//
        }, {
          x: 'W2',
          y: 2//
        }, {
          x: 'W3',
          y: 3//
        }, 
    ]
    }

      ]
        };
  }

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="heatmap"
              width="750"
            />
          </div>
    );
  }
}

export default ComplexityHeatmap;

