import React from 'react'
import SignUpForm from '../components/SignUpForm'

export default function SignUp({ setIsLogged }) {

  return (
    <div>
        <SignUpForm setIsLogged={setIsLogged} />
    </div>
  )
}
