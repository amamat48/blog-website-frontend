import React from 'react'
import Blog from './Blog'
import User from './User'
import SignUp from './SignUp'
import NavBar from '../components/NavBar'


export default function Home({ isLogged, setIsLogged}) {
  return (
    <div>
      {isLogged ?
      <div>
        <NavBar />
        <Blog />
        <User />
        </div>
      :
      <SignUp setIsLogged={setIsLogged}/>

    }
    </div>
  )
}
