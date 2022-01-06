import React from 'react'
import './IndividualExpense.css'

const IndividualExpense = ({date, location, cost, category}) => {
    return (
        <div>
            <p>{date}{location}{cost}{category}</p>
        </div>
    )
}

export default IndividualExpense