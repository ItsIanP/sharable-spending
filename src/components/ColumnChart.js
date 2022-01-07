import React, { Component } from 'react';
import CanvasJSReact from '../canvasJS/canvasjs.react';
import {categories} from '../data/CategoriesData';
import './ColumnChart.css'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


//pulls random category
function searchRandom(count, arr){
	let answer = [], counter = 0;
   
	while(counter < count){
	  let rand = arr[Math.floor(Math.random() * arr.length)];
	  if(!answer.some(an => an === rand)){
		answer.push(rand);
		counter++;
	  }
	}
	
	return answer;
  }


//generates random number
const min = 1
const max = 100

  function randomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  


class ColumnChart extends Component {
		render() {
		const options = {
			width: 650,
			title: {
				text: "Your Spending "
			},
			animationEnabled: true,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: searchRandom(1, categories),  y: randomNumber(min, max)  },
					{ label: searchRandom(1, categories), y: randomNumber(min, max)  },
					{ label: searchRandom(1, categories), y: randomNumber(min, max)  },
					{ label: searchRandom(1, categories),  y: randomNumber(min, max)  },
					{ label: searchRandom(1, categories),  y: randomNumber(min, max)  },
					{ label: searchRandom(1, categories),  y: randomNumber(min, max)  },
				]
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