import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar({ user }) {

  return (
    <div>
        <Link to='/'>
            <div>Home</div>
        </Link>
        <Link to='/blogs'>
            <div>Blogs</div>
        </Link>
        <Link to='/user'>
            <div>Profile</div>
        </Link>
    </div>
  )
}
