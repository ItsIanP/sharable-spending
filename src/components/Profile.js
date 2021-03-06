import React, {useState} from 'react'
import './Profile.css'
import ProfilePic from './ProfilePic.js'
import PersonalInfo from "./PersonalInfo";
import {setGlobalState, useGlobalState} from './globalState';
import ProfileColumnChart from './ProfileColumnChart';

const Profile = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const [userName] = useGlobalState("globalUsername")
    const [globePhone] = useGlobalState("globalPhone")
    const [globeEmail] = useGlobalState("globalEmail")
    const [globeAddress] = useGlobalState("globalAddress")

    return (
        <div className="overall">
            <div className="container">
                <div className="space">
                    {/*Float Spacing*/}
                </div>
                <div className="profilePic">
                    <ProfilePic/>
                </div>
                <div className="acctInfo">
                    <div className="infoHeader">
                        <h2 style={{"color" : "#455df4"}}>Account Info</h2>
                        <p>Click a field to change information, click anywhere to save</p>
                    </div>
                    <div className="fieldGrid">
                        <div className="username">
                            <label>Username:</label>
                            <PersonalInfo text={username} placeholder={userName} type="input">
                                <input
                                    type="text"
                                    name="username"
                                    style= {{"width" : "200px"}}
                                    //Set placeholder to global variable so it loads in first
                                    placeholder= "Username"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </PersonalInfo>
                        </div>
                        <div className="email">
                            <label>Email:</label>
                            <PersonalInfo text={email} placeholder={globeEmail} type="input">
                                <input
                                    type="text"
                                    name="task"
                                    style= {{"width" : "200px"}}
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={e => {setEmail(e.target.value); setGlobalState("globalEmail", e.target.value)}}
                                />
                            </PersonalInfo>
                        </div>
                        <div className="phone">
                            <label>Phone Number:</label>
                            <PersonalInfo text={phone} placeholder={globePhone} type="input">
                                <input
                                    type="text"
                                    name="phone"
                                    style= {{"width" : "200px"}}
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={e => {setPhone(e.target.value); setGlobalState("globalPhone", e.target.value)}}
                                />
                            </PersonalInfo>
                        </div>

                        <div className="address">
                            <label>Address:</label>
                            <PersonalInfo text={address} placeholder={globeAddress} type="input">
                                <input
                                    type="text"
                                    name="address"
                                    style= {{"width" : "200px"}}
                                    placeholder="Address"
                                    value={address}
                                    onChange={e => {setAddress(e.target.value); setGlobalState("globalAddress", e.target.value)}}

                                />
                            </PersonalInfo>
                        </div>

                        <div className="chart">
                        <ProfileColumnChart/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile