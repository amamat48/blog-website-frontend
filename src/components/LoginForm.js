import React from 'react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/users-api'

export default function LoginForm({ setUser, setIsLogged }) {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const nav = useNavigate()

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await login(credentials)
            setIsLogged(true)
            setUser(user.user)
            nav("/")
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <h1 className='loginHeader'>Log in!</h1>
            <div>
                <form className="form-container" onSubmit={handleSubmit}>
                    <label className='loginLabel'>Email:</label>
                    <input className='loginInput' type="email" name="email" value={credentials.email} onChange={handleChange} required />

                    <label className='loginLabel'>Password:</label>
                    <input className="loginInput" type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <div className='loginButtonContainer'>
                        <button className='loginButton' type="submit">LOG IN</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
