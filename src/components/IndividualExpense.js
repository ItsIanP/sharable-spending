import React from 'react'
import './IndividualExpense.css'

const IndividualExpense = ({date, location, cost, category}) => {
    return (
        <div>
            <p>{date}</p>
            <p>{location}</p>
            <p>{cost}</p>
            <p>{category}</p>
        </div>
    )
}

export default IndividualExpense