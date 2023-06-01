import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Blog from './pages/Blog'
import User from './pages/User'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import CreateBlog from './pages/CreateBlog'

import * as blogsAPI from './services/blog-api'

import { getTokendUser } from './services/users-api'
import NavBar from './components/NavBar';
import SingleBlog from './pages/SingleBlog';
import EditBlog from './pages/EditBlog';



function App() {

  const [user, setUser] = useState(getTokendUser())
  const [isLogged, setIsLogged] = useState(false)
  const [allBlogs, setAllBlogs] = useState(null)

  useEffect(() => {
    const fetchAllBlogs = async () => {
      const response = await blogsAPI.getAllBlogs()
      console.log(response.data)
      setAllBlogs(response.data)
    }
    fetchAllBlogs()
  }, [])



  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home isLogged={isLogged} setIsLogged={setIsLogged} blogs={allBlogs} user={user} setUser={setUser}  />} />
        <Route path='/blogs' element={<Blog blogs={allBlogs} />} />
        <Route path='/blogs/create' element={<CreateBlog />} />
        <Route path="/blogs/edit/:id" element={<EditBlog blogs={allBlogs} />} />
        <Route path='/blogs/:id' element={<SingleBlog />} />
        <Route path='/user' element={<User user={user}/>} />
        <Route path='/user/signup' element={<SignUp setUser={setUser} setIsLogged={setIsLogged}/>} />
        <Route path='/user/login' element={<Login setUser={setUser} setIsLogged={setIsLogged}/>} />
      </Routes>
    </div>

  );
}

export default App;
