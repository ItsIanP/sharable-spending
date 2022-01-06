import React, {useState} from 'react'
import Goal from './Goal'
import {data} from '../data/GoalData'
import { useNavigate } from 'react-router-dom'
import './AddGoal.css'


const AddGoal = () => {
    let navigate = useNavigate();
    const [category, setCategory] = useState('')
    const [budget, setBudget] = useState('')

    const categoryHandler = (event) => {
        setCategory(event.target.value);
        console.log(event)
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
            <div className = "form">
                <h1>Add Your Goal</h1>
                <label>Categories</label>
                <select onChange={categoryHandler}>           
                        <option>Shopping</option>
                        <option>Restaurant and Dining</option>
                        <option>Home and Utilities</option>
                </select>
                <label>Budget Limit</label>
                <input onChange={budgetHandler}></input>
                <button onClick={addGoalHandler}>Add Goal</button>
            </div>

            <h1>Your Current Goals this Month:</h1>
            <div className="goals">
                {data.map((goal) => (
                    <Goal category={goal.category} budget={goal.budget}/>
                ))}
            </div>

        </div>
    )
}

export default AddGoal
