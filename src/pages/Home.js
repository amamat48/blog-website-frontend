import React from 'react'
import Blog from './Blog'
import User from './User'
import SignUp from './SignUp'
import NavBar from '../components/NavBar'

import { useState, useEffect } from 'react'


export default function Home({ isLogged, setIsLogged, blogs }) {


  return (
    <div>
      {isLogged ?
      <div>
        <NavBar />
        <Blog blogs={blogs}/>
        <User />
        </div>
      :
      <SignUp setIsLogged={setIsLogged}/>

    }
    </div>
  )
}
