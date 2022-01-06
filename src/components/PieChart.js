import { findByLabelText } from '@testing-library/react';
import React, { Component } from 'react';
import CanvasJSReact from '../canvasJS/canvasjs.react';
import './PieChart.css';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

//Data is hard-coded right now.
 
class PieChart extends Component {
	render() {
		const options = {
			width: 400,
			height: 420,
			theme: "dark2",
			animationEnabled: true,
			exportFileName: "Spending",
			exportEnabled: true,
			title:{
				text: "Username's Spending"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 32, label: "Chipotle" },
					{ y: 22, label: "AMC" },
					{ y: 15, label: "Netflix" },
					{ y: 19, label: "Disney+" },
					{ y: 5, label: "Starbucks" },
					{ y: 7, label: "Groceries" }
				]
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

export default PieChart;