import React from 'react'

import { useState } from 'react'
import LoginForm from '../components/LoginForm'

export default function Login({ setUser, setIsLogged }) {
    return(
        <div>
            <LoginForm setUser={setUser} setIsLogged={setIsLogged}/>
        </div>
    )
}
