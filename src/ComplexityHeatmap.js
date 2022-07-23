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
        }
      },
      series: [
        {
          name: "Selection Sort",
          data: [{
            x: 'W1',
            y: 'Ω(N^2)'
          }, {
            x: 'W2',
            y: 'Θ(N^2'
          }, {
            x: 'W3',
            y: 'O(N^2)'
          }, 
        ]
        },
        {
          name: "Bubble Sort",
          data: [{
            x: 'W1',
            y: 'Ω(N)'
          }, {
            x: 'W2',
            y: 'Θ(N^2)'
          }, {
            x: 'W3',
            y: 'O(N^2)'
          }, 
        ]
        },
        {
            name: "Quick Sort",
            data: [{
              x: 'W1',
              y: 'Ω(N log(N))'
            }, {
              x: 'W2',
              y: 'Θ(N log(N)'
            }, {
              x: 'W3',
              y: 'O(N^2)'
            }, 
        ]
        }
      ]
        };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="heatmap"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ComplexityHeatmap;

// series: [
//     {
//       name: "Selection Sort",
//       data: [{
//         x: 'W1',
//         y: 'Ω(N^2)'
//       }, {
//         x: 'W2',
//         y: 'Θ(N^2'
//       }, {
//         x: 'W3',
//         y: 'O(N^2)'
//       }, 
//     ]
//     },
//     {
//       name: "Bubble Sort",
//       data: [{
//         x: 'W1',
//         y: 'Ω(N)'
//       }, {
//         x: 'W2',
//         y: 'Θ(N^2)'
//       }, {
//         x: 'W3',
//         y: 'O(N^2)'
//       }, 
//     ]
//     },
//     {
//         name: "Quick Sort",
//         data: [{
//           x: 'W1',
//           y: 'Ω(N log(N))'
//         }, {
//           x: 'W2',
//           y: 'Θ(N log(N)'
//         }, {
//           x: 'W3',
//           y: 'O(N^2)'
//         }, 
//     ]
//     }
//   ]
