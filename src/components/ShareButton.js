import React from 'react'
import HomePieChart from './HomePieChart'
import {useNavigate } from 'react-router-dom'

let navigate = useNavigate();
const feedHandler = (event) => {
    navigate("../Feed", ({replace: true}));
}

const ShareButton = () => {
    return (
        <div>
            <button onClick={feedHandler} style = {{"width": "220px"}}>Share Your Pie Chart!</button>
        </div>
    )
}

export default ShareButton
