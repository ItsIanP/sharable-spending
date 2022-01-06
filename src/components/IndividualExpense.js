import React from 'react'
import './IndividualExpense.css'

const IndividualExpense = ({date, location, cost, category}) => {
    return (
        <div>
            <p><b>Date: </b> {date} <b>Location: </b> {location} <b>Cost: </b> {cost} <b>Category: </b> {category} </p>
        </div>
    )
}

export default IndividualExpense