import React from 'react'
import SignUpForm from '../components/SignUpForm'

export default function SignUp({ setIsLogged, setUser }) {

  return (
    <div>
        <SignUpForm setIsLogged={setIsLogged} setUser={setUser}/>
    </div>
  )
}
