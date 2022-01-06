import React from 'react'
import './Goal.css'

const Goal = ({category, budget}) => {
    return (
        <div>
            <h3>Category : Budget</h3>
            <p>{category} : {budget}</p>
            
        </div>
    )
}

export default Goal
