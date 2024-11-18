import React, { useState, useContext } from 'react'
import Header from '../Header/Header'
import './Login.css'
import { Context } from '../context/UserContext.jsx';
import { Link } from 'react-router-dom';

export default function Login() {

    const [user, setUser] = useState({})
    const { login } = useContext(Context)

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        login(user)
    }

  return (
    <div>
        <div className='login-header'>
            <Header/>
        </div>
        <form onSubmit={handleSubmit}>
        <div className='login-card'>
            <div className='login-title'>
                <p>Login</p>
            </div>
            <div className='login-email'>
                <label>Email</label>
                <input text="E-mail" type="email" name="email" placeholder="Type your email" onChange={handleChange}></input>
            </div>
            <div className='login-password'>
                <label>Password</label>
                <input text="Senha" type="password" name="password" placeholder="Type your password" onChange={handleChange}></input>
            </div>
            <div className='login-button'>
                <button type="submit">Login</button>
            </div>
            <div className='register-button'>
                <Link to={'/register'}><button>Not register? Register now!</button></Link>
            </div>
        </div>
        </form>
    </div>
  )
}
