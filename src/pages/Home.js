import React from 'react'
import Blog from './Blog'

import SignUp from './SignUp'


import { useState, useEffect } from 'react'


export default function Home({  blogs, isLogged, setIsLogged, setUser, user }) {



  return (
    <div>

      {isLogged ?
        <div>
        <Blog blogs={blogs} user={user} />
        </div>
        :
        <SignUp user={user} setIsLogged={setIsLogged} setUser={setUser} />

      }
    </div>
  )
}
