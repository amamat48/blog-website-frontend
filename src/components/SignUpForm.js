import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { signUp } from '../services/users-api'

export default function SignUpCard({ setIsLogged }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const newUser = await signUp(formData)
      console.log(newUser)
      // setIsLogged(true)
    } catch (error) {

      console.error('Sign-up error:', error);
    }
  }

  // const disable = formData.password !== formData.confirm

  return (

    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <label>Confirm</label>
          <input type='password' name='password' value={formData.confirm} onChange={handleChange} required />
          <button type="submit">SIGN UP</button>
        </form>
      </div>
      {/* <p className="error-message">&nbsp;{this.state.error}</p> */}
      <Link to='/login'>or Log In</Link>
    </div>
  )
}
