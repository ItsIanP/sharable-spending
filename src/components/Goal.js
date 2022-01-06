import React from 'react'
import './Goal.css'

const Goal = ({category, budget}) => {
    return (
        <div className="container">
            <p>{category} : {budget}</p>
            
        </div>
    )
}

export default Goal
