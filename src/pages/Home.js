import React from 'react'
import Blog from './Blog'
import User from './User'
import SignUp from './SignUp'
import NavBar from '../components/NavBar'

import { useState, useEffect } from 'react'


export default function Home({  blogs, isLogged, setIsLogged, setUser, user }) {



  return (
    <div>

      {isLogged ?
        <div>
        <Blog blogs={blogs}  />
        </div>
        :
        <SignUp user={user} setIsLogged={setIsLogged} setUser={setUser} />

      }
    </div>
  )
}
