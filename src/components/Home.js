import React from 'react'
import './Home.css'
import IndividualExpense from './IndividualExpense'
import {data} from '../data/ExpenseData'

const Home = () => {
    return (
        <div class = "row">
            <h1>Home</h1>
            <div class = "column">
                <h1>Transactions</h1>
                {data.map((expense) => (
                    <IndividualExpense date={expense.date} location={expense.location} cost={expense.cost} category={expense.category}/>
                ))}
            </div>

            <div class = "column">
                <h1>Pie Chart</h1>
            </div>
        </div>
    )
}

export default Home
