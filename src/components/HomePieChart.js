import { findByLabelText } from '@testing-library/react';
import React, { Component } from 'react';
import CanvasJSReact from '../canvasJS/canvasjs.react';
import './PieChart.css';
import {data} from '../data/ExpenseData'
import {categories} from '../data/CategoriesData'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


var datapts = []

var res = data.map(datas => parseFloat(datas.cost)).reduce((acc, datas) => datas + acc);

function createWedges(data, res, categories) {

    for (let cat in categories) {
        var total_per_cost = data.filter(obj => obj.category === categories[cat]).map(datas => parseFloat(datas.cost)).reduce((acc, datas) => datas + acc);
        console.log(total_per_cost / res, total_per_cost, cat)

		datapts.push({y: ((total_per_cost/res)*100).toFixed(2), label: categories[cat]})
    }
}

createWedges(data, res, categories);
 
class HomePieChart extends Component {
	render() {
		const options = {
			width: 900,
			height: 600,
			theme: "light2",
			animationEnabled: true,
			exportFileName: "Spending",
			exportEnabled: true,
			title:{
				text: "Monthly Spending"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: datapts
			}]
		}
		
		return (
		<div className = "pie">
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default HomePieChart;