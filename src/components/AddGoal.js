import React from 'react'
import './AddGoal.css'


const AddGoal = () => {
    return (
        <div className="container">
            <div className = "column1">
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
            <div className="column2">
                <h1>Your Current Goals:</h1>
                <h3>Category : Budget</h3>
                <div>
                    {data.map((goal) => (
                        
                        <div className="goals">
                        <ol>
                        <li><Goal category={goal.category} budget={goal.budget}/></li>
                        </ol>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AddGoal
