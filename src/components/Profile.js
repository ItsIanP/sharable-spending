import React from 'react'
import './Profile.css'
import ProfilePic from './ProfilePic.js'
import PersonalInfo from "./PersonalInfo";

const Profile = () => {
    return (
        <div className="overall">
            <div className="container">
                <div className="space"></div>
                <div className="profilePic">
                    <ProfilePic/>
                </div>
                <div className="acctInfo">
                    <PersonalInfo/>
                </div>
            </div>
        </div>
    )
}

export default Profile
