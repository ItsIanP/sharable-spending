import React, { Component } from 'react';
import CanvasJSReact from '../canvasJS/canvasjs.react';
import {categories} from '../data/CategoriesData';
import {data} from '../data/ExpenseData'
import './ColumnChart.css'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


var datapts = []

var res = data.map(datas => parseFloat(datas.cost)).reduce((acc, datas) => datas + acc);

function createBars(data, res, categories) {

    for (let cat in categories) {
        var total_per_cost = data.filter(obj => obj.category === categories[cat]).map(datas => parseFloat(datas.cost)).reduce((acc, datas) => datas + acc);
        console.log(total_per_cost / res, total_per_cost, cat)

		datapts.push({y: ((total_per_cost/res)*100), label: categories[cat]})
    }
}

createBars(data, res, categories);
console.log(datapts);
  


class ColumnChart extends Component {
		render() {
		const options = {
			width: 650,
			title: {
				text: "Your Spending "
			},
			axisY:{
				title: "Percentage",
				interlacedColor: "#F8F1E4",
				tickLength: 10
			   },
			axisX:{
			title: "Category",
			tickLength: 10
			},
			animationEnabled: true,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: datapts
			}
			]
		}
		
		return (
		<div className="bar">
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default ColumnChart;