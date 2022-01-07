import React, {useState} from 'react'
import Goal from './Goal'
import {data} from '../data/GoalData'
import {categories} from '../data/CategoriesData'
import { useNavigate } from 'react-router-dom'
import './AddGoal.css'



const AddGoal = () => {
    let navigate = useNavigate();
    const [category, setCategory] = useState('')
    const [budget, setBudget] = useState(0)



    const categoryHandler = (event) => {
        setCategory(event.target.value);
    }
    const budgetHandler = (event) => {
        setBudget(event.target.value);
    }
    
    const addGoalHandler = (event) => {
        data.push({
            category: category,
            budget: budget
        })
        navigate("../AddGoal", ({replace: true}));
    }




    return (
        <div>
            <div className = "column1">
            <h1>Add Your Goal</h1>
            <div className = "form">
                <label className="label">Categories</label>
                <select className="select" onChange={categoryHandler}> 
                        <option>Select:</option> 
                        {categories.map((categ) => (
                            <option>{categ}</option>
                        ))}
                </select>
                <label className="label">Budget Limit</label>
                <input className="input" onChange={budgetHandler}></input>
                <button type="button" onClick={addGoalHandler}>Add Goal</button>
            </div>
            </div>

        
            <ol className="column2">
                <h1>Your Current Goals this Month:</h1>
                <div className="goals">
                    {data.map((goal) => (
                        <li><Goal category={goal.category} budget={goal.budget}/>
                        </li>

                    ))}

                </div>
            </ol>
            </div>
     
    )
}
export default AddGoal