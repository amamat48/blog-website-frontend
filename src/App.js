
import './App.css';
import { useState, useEffect, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Blog from './pages/Blog'
import User from './pages/User'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import CreateBlog from './pages/CreateBlog'

import * as blogsAPI from './services/blog-api'

import { getUserFromLocalStorage } from './services/users-api'
import NavBar from './components/NavBar';
import SingleBlog from './pages/SingleBlog';
import EditBlog from './pages/EditBlog';



function App() {

  const [user, setUser] = useState(null)
  const [isLogged, setIsLogged] = useState(false)
  const [allBlogs, setAllBlogs] = useState(null)

  const fetchAllBlogs = async () => {
    const userFromLocalStorage = getUserFromLocalStorage()
    if (userFromLocalStorage) {
      const response = await blogsAPI.getAllBlogs()
      setAllBlogs(response.data)
    } else {
      setAllBlogs(null)
    }

  }

  const fetchUser = useCallback(() => {
    const userFromLocalStorage = getUserFromLocalStorage()
    if (userFromLocalStorage){
    setUser(userFromLocalStorage.newUser)
    setIsLogged(true)
    } else {
      setIsLogged(false)
      setUser(null)
    }

  }, [])

  useEffect(() => {
    fetchAllBlogs()
    fetchUser()
  }, [] )



  return (
    <div className='App'>
      <NavBar user={user} isLogged={isLogged} />
      <Routes>
        <Route path='/' element={<Home isLogged={isLogged} setIsLogged={setIsLogged} blogs={allBlogs} user={user} setUser={setUser}  />} />
        <Route path='/blogs' element={<Blog blogs={allBlogs} user={user} />} />
        <Route path='/blogs/create' element={<CreateBlog user={user} />} />
        <Route path="/blogs/edit/:id" element={<EditBlog blogs={allBlogs} />} />
        <Route path='/blogs/:id' element={<SingleBlog />} />
        <Route path='/user' element={<User user={user}/>} />
        <Route path='/user/signup' element={<SignUp user={user} setUser={setUser} setIsLogged={setIsLogged}/>} />
        <Route path='/user/login' element={<Login setUser={setUser} setIsLogged={setIsLogged}/>} />
      </Routes>
    </div>

  );
}

export default App;
