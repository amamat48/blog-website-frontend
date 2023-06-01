import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar({ user }) {

  return (
    <div className='navBarContainer'>
        <Link to='/'>
            <div>Home</div>
        </Link>
        <Link to='/blogs/create'>
            <div>Create Blog</div>
        </Link>
    </div>
  )
}
