import React from 'react'

import { useState } from 'react'
import { login } from '../services/users-api'

export default function LoginForm({ setUser, setIsLogged }) {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

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
            setUser(user)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <button type="submit">LOG IN</button>
                </form>
            </div>
        </div>
    )
}
