import React from 'react'
import './Goal.css'

const Goal = ({category, budget}) => {
    return (
        <div>
            <p>{category}</p>
            <p>{budget}</p> 
        </div>
    )
}

export default Goal
