import React from 'react'
import SignUpCard from '../components/SignUpForm'

export default function SignUp({ setIsLogged }) {
    
  return (
    <div>
        <SignUpCard setIsLogged={setIsLogged}/>
    </div>
  )
}
