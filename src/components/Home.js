import React from 'react'
import './Home.css'
import IndividualExpense from './IndividualExpense'
import {data} from '../data/ExpenseData'

const Home = () => {
    return (
        <div class = "container">
            <h1>Shareable Spending! Homepage</h1>
            <div class = "row">
                <div class = "column1">
                    <h1>Balance</h1>
                    <p>$3500</p>
                    <br></br>

                    <h1>Add a Transaction</h1>
                    <div className="form">
                        <label>Date</label>
                        <input></input>
                        <label>Location</label>
                        <input></input>
                        <label>Cost</label>
                        <input></input>
                        <label>Category</label>
                        <input></input>
                        <button>Add Transaction</button>
                    </div>
                    <br></br>

                    <h1>Transactions</h1>
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Cost</th>
                            <th>Category</th>
                        </tr>
                        <tr>
                            <td>
                                {data.map((expense) => (
                                    <IndividualExpense date={expense.date}/>
                                ))}
                            </td>
                            <td>
                                {data.map((expense) => (
                                    <IndividualExpense location={expense.location}/>
                                ))}
                            </td>
                            <td>
                                {data.map((expense) => (
                                    <IndividualExpense cost={expense.cost}/>
                                ))}
                            </td>
                            <td>
                                {data.map((expense) => (
                                    <IndividualExpense category={expense.category}/>
                                ))}
                            </td>
                        </tr>
                    </table>
                </div>

                <div class = "column2">
                    <h1>Pie Chart</h1>
                </div>
            </div>
        </div>
    )
}

export default Home