import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { signUp } from '../services/users-api'

export default function SignUpForm({ user, setIsLogged, setUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  })

  const nav = useNavigate()

  const handleChange = (evt) => {

    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })

  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    try {
      const newUser = await signUp(formData)
      delete formData.confirm
      console.log(formData)
      setIsLogged(true)
      setUser(newUser)
      window.location.reload()
    } catch (error) {

      console.error('Sign-up error:', error);
    }
  }

  const disable = formData.password !== formData.confirm

  return (

    <div>
      <div>
        <form className="form-container" autoComplete="off" onSubmit={handleSubmit}>
          <label className='label'>Name:</label>
          <input className='input' type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label className='label'>Email:</label>
          <input className='input' type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label className='label'>Password:</label>
          <input className='input' type="password" name="password" value={formData.password} onChange={handleChange} required />

          <label className='label'>Confirm:</label>
          <input className='input' type='password' name='confirm' value={formData.confirm} onChange={handleChange} required />

          <div className='signup'>
            <button className='signupButton' disabled={disable} type="submit">SIGN UP</button>
          </div>
        </form>
      </div>
      {/* <p className="error-message">&nbsp;{this.state.error}</p> */}
      <Link className='login' to='/user/login'>or Log In</Link>
    </div>
  )
}
