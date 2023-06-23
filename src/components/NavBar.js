import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NavBar({ user }) {

  const nav = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.reload()
  }

  const handleClick = () => {

    if (!user) {
      return (
        <div>
          <p>You need to sign in to create a blog!</p>
        </div>
      )
    }

  }

  return (
    <>
      {user ?
        (<div className='navBarContainer'>
          < Link to='/' >
            <div className='home'>Home</div>
          </Link >
          <Link to='/blogs/create'>
            <div className='createBlog'>Create Blog</div>
          </Link>
          <p className='welcome'>Welcome {user.name}</p>
          <button className='logout' onClick={handleLogout}>Logout</button>
        </div >)
        :
        <p></p>
      }
    </>

  )
}
