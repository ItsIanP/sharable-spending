import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import './Login.css'
import {setGlobalState, useGlobalState} from './globalState';

const Login = () => {
    let navigate = useNavigate();
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const [globalUser, setGlobalUser] = useState('')

    const usernameHandler = (event) => {
        setUsername(event.target.value);
        setGlobalState("globalUsername", event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const loginHandler = (event) => {
        navigate("../home", ({replace: true}));
    }

    const registerHandler = (event) => {
        navigate("../Register", ({replace: true}));
    }


    return (
        <div>
            <h1 style={{"color" : "#455df4"}}>Login</h1>
            <div className="login">
                <label>Username</label>
                <input onChange={usernameHandler}></input>
                <label>Password</label>
                <input onChange={passwordHandler}></input>
                <button onClick={loginHandler}>Login</button>
                <br></br>
                <button onClick={registerHandler}>Register</button>
            </div>
        </div>
    )
}

export default Login
