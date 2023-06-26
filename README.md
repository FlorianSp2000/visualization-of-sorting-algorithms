# visualization

Start the project by navigating to the visualization folder, executing "npm install" and then "npm start". The server will run at localhost:3000.  

The current version of the project includes time complexity charts with unevenly scaled x-axis. This issue arises from a bug in the ApexCharts version we are using, which causes our page to encounter compatibility problems when customized x-axis values are utilized on Google Chrome. To view the intended version of the charts, it is necessary to modify all .js files located in the src/Charts folder. This modification involves uncommenting the lines that specify the intended maximum value for the x-axis.

Please note that making these modifications will resolve the issue and allow the charts to display correctly in other web browsers, such as Firefox.