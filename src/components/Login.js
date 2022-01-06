import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
    let navigate = useNavigate();
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const loginHandler = (event) => {
        navigate("../home", ({replace: true}));
    }


    return (
        <div>
            <h1>Login</h1>
            <div className="login">
                <label>Username</label>
                <input onChange={usernameHandler}></input>
                <label>Password</label>
                <input onChange={passwordHandler}></input>
                <button onClick={loginHandler}>Login</button>
            </div>
        </div>
    )
}

export default Login
