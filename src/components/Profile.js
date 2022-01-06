import React, {useState} from 'react'
import './Profile.css'
import ProfilePic from './ProfilePic.js'
import PersonalInfo from "./PersonalInfo";

const Profile = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

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
                        <h2>Account Info</h2>
                        <p>Double click a field to change information, double-click anywhere to save</p>
                    </div>
                    <div className="fieldGrid">
                        <div className="username">
                            <label>Username:</label>
                            <PersonalInfo text={username} placeholder="Username" type="input">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="New Username"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </PersonalInfo>
                        </div>
                        <div className="email">
                            <label>Email:</label>
                            <PersonalInfo text={email} placeholder="Email Address" type="input">
                                <input
                                    type="text"
                                    name="task"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </PersonalInfo>
                        </div>
                        <div className="phone">
                            <label>Phone Number:</label>
                            <PersonalInfo text={phone} placeholder="Phone Number" type="input">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </PersonalInfo>
                        </div>

                        <div className="address">
                            <label>Address:</label>
                            <PersonalInfo text={address} placeholder="Address" type="input">
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                />
                            </PersonalInfo>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
