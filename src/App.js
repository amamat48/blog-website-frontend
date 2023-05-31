import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Blog from './pages/Blog'
import User from './pages/User'
import Login from './pages/Login'
import SignUp from './pages/SignUp'



function App() {

const [user, setUser] = useState(null)
const [isLogged, setIsLogged] = useState(false)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home isLogged={isLogged} setIsLogged={setIsLogged} />} />
        <Route path='/blogs' element={<Blog />}/>
        <Route path='/user' element={<User />} />
        <Route path='/user/signup' element={<SignUp />} />
        <Route path='/users/login' element={<Login />} />
      </Routes>
    </div>

  );
}

export default App;
