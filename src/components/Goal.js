import React, {useState} from 'react'
import { categories } from '../data/CategoriesData'
import {data} from '../data/ExpenseData'

import './Goal.css'

var datapts = []

var res = data.map(datas => parseFloat(datas.cost)).reduce((acc, datas) => datas + acc);


for (let cat in categories) {
var total_per_cost = data.filter(obj => obj.category === categories[cat]).map(datas => parseFloat(datas.cost)).reduce((acc, datas) => datas + acc);
console.log(total_per_cost / res, total_per_cost, cat)
var percent = ((1000- total_per_cost)/1000) *100
datapts.push({y: percent, label: categories[cat]})
}









const Goal = ({category, budget}) => {
    const [random1,  setRandom] = useState(0)
    //const [totalSpend, setSpend] = useState(0)

    //{console.log(percentage)}
    
    // for(let cat in datapts){
    //     //{console.log(datapts[cat].label)}
    //     var total_cost = datapts.filter(obj => obj.label === {category}).map(datas => parseFloat(datas.y)).reduce((acc, datas) => datas + acc, total_cost);
    //     {console.log(total_cost)}
    //     var percent = (parseFloat({budget}) - total_cost) / parseFloat(budget) *100
    //     percentage = percent

    // }

    

    // var total_cost = datapts.filter(obj => obj.label === {category}).map(datas => parseFloat(datas.y)).reduce((acc, datas) => datas + acc)

    const random =()=>{
        setRandom(Math.floor(Math.random() * 7))
    }
    
        
   return (
    <div>
        
        <p>{category}</p>
        <p>Spending progress:</p>
        
        <progress id="file" value = {datapts[Math.floor(Math.random() * 7)].y} max="100"></progress>
        
      

        

    
              
    </div>

    )
}

export default Goal
