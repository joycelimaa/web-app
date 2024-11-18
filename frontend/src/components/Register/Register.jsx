import React, { useState, useContext } from 'react';
import Header from '../Header/Header'
import './Register.css'
import { Context } from '../context/UserContext.jsx';
import { Link } from 'react-router-dom';


export default function Register() {

    const [user, setUser] = useState({})
    const { register } = useContext(Context)

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        register(user)
    }

  return (
    <div>
        <div className='register-header'>
            <Header/>
        </div>
        <form onSubmit={handleSubmit}>
        <div className='register-card'>
            <div className='register-title'>
                <p>Register</p>
            </div>
            <div className='register-name'>
                <label>Name</label>
                <input type="text" name="name" placeholder="Type your name" onChange={handleChange}></input>
            </div>
            <div className='register-email'>
                <label>Email</label>
                <input  type="email" name="email" placeholder="Type your email" onChange={handleChange}></input>
            </div>
            <div className='register-password'>
                <label>Password</label>
                <input  type="password" name="password" placeholder="Type your password" onChange={handleChange}></input>
            </div>
            <div className='register2-button'>
                <button>Register</button>
            </div>
            <div className='register-button'>
                <Link to={'/login'}><button>Already register? login now!</button></Link>
            </div>
           
        </div>
        </form>
    </div>
  )
}
