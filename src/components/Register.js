import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import './Login.css'
import {setGlobalState, useGlobalState} from './globalState';


const Register = () => {
    let navigate = useNavigate();
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[bankID, setbankID] = useState('')
    const[bankPassword, setBankPassword] = useState('')
    const [globalUser, setGlobalUser] = useState('')


    const usernameHandler = (event) => {
        setUsername(event.target.value);
        setGlobalState("globalUsername", event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const bankIDHandler = (event) => {
        setbankID(event.target.value);
    }

    const bankPasswordHandler = (event) => {
        setBankPassword(event.target.value);
    }

    const registerHandler = (event) => {
        const newUser = {
            username: username,
            password: password,
            bankID: bankID,
            bankPassword: bankPassword
        }

        fetch('http://localhost:8082/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        navigate("../", ({replace: true}));
    }
    
    return (
        <div>
            <h1>Register</h1>
            <div className="login">
                <label>Username</label>
                <input onChange={usernameHandler}></input>
                <label>Password</label>
                <input onChange={passwordHandler}></input>
                <h2>Provide Capital One Bank Account Details to Link Accounts</h2>
                <label>Bank Account ID</label>
                <input onChange={bankIDHandler}></input>
                <label>Bank Account Password</label>
                <input onChange={bankPasswordHandler}></input>
                <button onClick={registerHandler}>Register</button>
            </div>
        </div>
    )
}

export default Register;
