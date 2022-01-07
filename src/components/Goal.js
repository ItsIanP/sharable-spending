import React, {useState} from 'react'
import { categories } from '../data/CategoriesData'
import {data} from '../data/ExpenseData'

import './Goal.css'

var datapts = []

var res = data.map(datas => parseFloat(datas.cost)).reduce((acc, datas) => datas + acc);

function calculate(budget){
    for (let cat in categories) {
        var total_per_cost = data.filter(obj => obj.category === categories[cat]).map(datas => parseFloat(datas.cost)).reduce((acc, datas) => datas + acc);
        console.log(total_per_cost / res, total_per_cost, cat)
        var percent = ((budget- total_per_cost)/budget) *100
        datapts.push({y:percent, label: categories[cat]})
    }
    return datapts
}


const Goal = ({category, budget}) => {
    const [random1,  setRandom] = useState(0)
    const [percentage, setPercentage] = useState("")
    
    for(let cat in calculate(budget)){
        if(calculate(budget)[cat].label === category){
            setPercentage(calculate(budget)[cat].y)
            console.log(percentage)
        }
    

    }

    

    // var total_cost = datapts.filter(obj => obj.label === {category}).map(datas => parseFloat(datas.y)).reduce((acc, datas) => datas + acc)
   return (
    <div>
        
        <p>{category}</p>
        <p>Spending progress:</p>
        {/* <progress id="file" value = "70" max="100"></progress> */}
        <progress id="file" value = {calculate(budget)[Math.floor(Math.random() * 7)].y} max="100"></progress>
              
    </div>

    )
}

export default Goal