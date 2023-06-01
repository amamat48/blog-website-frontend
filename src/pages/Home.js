import React from 'react'
import Blog from './Blog'
import User from './User'
import SignUp from './SignUp'
import NavBar from '../components/NavBar'

import { useState, useEffect } from 'react'


export default function Home({  blogs }) {



  return (
    <div>
      <Blog blogs={blogs}  />
      {/* {isLogged ?
        <div>
        </div>
        :
        <SignUp setIsLogged={setIsLogged} setUser={setUser} />

      } */}
    </div>
  )
}
