import React from 'react'
import './Home.css'
import IndividualExpense from './IndividualExpense'
import {data} from '../data/ExpenseData'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <div>
                {data.map((expense) => (
                    <IndividualExpense date={expense.date} location={expense.location} cost={expense.cost} category={expense.category}/>
                ))}
            </div>
        </div>
    )
}

export default Home
