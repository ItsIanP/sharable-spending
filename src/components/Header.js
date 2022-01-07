import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src="https://lh3.googleusercontent.com/PamDOuUvLoNq59jKH8YTmo5f0EpBD_1CetqK77hREOuBlrHDIY2CxK52M9wVloe5Gt3XD_a2VEFhczlJ5HZAiWqw2T59HWiAInQ5M6C5fJgy2Ct6ZbJ0AUgqrrj_7RdFffpbcogRsQ=w2400" style={{"width" : "140px", "height" : "100px"}} alt=""></img>
            <div className="links">
                <Link to="/Home">home</Link>
                <Link to="/Feed">feed</Link>
                <Link to="/AddGoal">goals</Link>
                <Link to="/Profile">profile</Link>
                <Link to="/Register">register</Link>
            </div>
        </div>
    )
}

export default Header