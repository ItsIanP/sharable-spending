import React from 'react'
import './Home.css'
import IndividualExpense from './IndividualExpense'
import {data} from '../data/ExpenseData'
import HomePieChart from './HomePieChart';
import ShareButton from './ShareButton';


var res = data.map(datas => parseFloat(datas.cost)).reduce((acc, datas) => datas + acc);
console.log(res);



const Home = () => {
    return (
        <div class = "container">
            <h1 style={{"color" : "#455df4"}}>Homepage</h1>
            <div class = "row">
                <div class = "column1">
                    <h1 style={{"color" : "#455df4"}}>Balance</h1>
                    <table>
                        <tr>
                            <th>Balance</th>
                            <th>Amount Spent this Month</th>
                        </tr>
                        <tr>
                            <td>3500.00</td>
                            <td>1542.33</td>
                        </tr>
                    </table>
                    <br></br>

                    <h1 style={{"color" : "#455df4"}}>Transactions</h1>
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
                    <h1 style={{"color" : "#455df4"}}>Pie Chart</h1>
                    <div class = "piechart">
                        <HomePieChart/>
                    </div>
                    <div className="button">
                        <ShareButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home