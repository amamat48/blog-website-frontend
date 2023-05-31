import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Blog from './pages/Blog'
import User from './pages/User'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

import * as blogsAPI from './services/blog-api'

import { getTokendUser } from './services/users-api'


function App() {

  const [user, setUser] = useState(getTokendUser())
  const [isLogged, setIsLogged] = useState(false)
  const [allBlogs, setAllBlogs] = useState(null)

  useEffect(() => {
    const fetchAllBlogs = async () => {
      const response = await blogsAPI.getAllBlogs()
      setAllBlogs(response)
    }
    fetchAllBlogs()
  }, [])

  console.log(user)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home isLogged={isLogged} setIsLogged={setIsLogged} blogs={allBlogs} user={user} />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/user' element={<User user={user}/>} />
        <Route path='/user/signup' element={<SignUp />} />
        <Route path='/users/login' element={<Login setUser={setUser} setIsLogged={setIsLogged}/>} />
      </Routes>
    </div>

  );
}

export default App;
