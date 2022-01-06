import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo">Insert Logo Here</h1>
            <div className="links">
                <Link to="/Home">Home</Link>
                <Link to="/Feed">Feed</Link>
                <Link to="/Profile">Profile</Link>
            </div>
        </div>
    )
}

export default Header