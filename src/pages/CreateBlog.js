import React from 'react'

import Popup from 'reactjs-popup'

import { useState } from 'react'
import { createBlog } from '../services/blog-api'
import { useNavigate } from 'react-router-dom'



export default function CreateBlog({ user }) {

    const [newBlog, setNewBlog] = useState({
        title: '',
        entry: '',
        user: user._id
    })
    console.log(user._id)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setNewBlog({
            ...newBlog,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await createBlog(newBlog)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Create Blog</h1>
            <form onSubmit={handleSubmit}>
                Title: <input type='text' name='title' value={newBlog.title} onChange={handleChange} required />
                Entry: <input type='text' name='entry' value={newBlog.entry} onChange={handleChange} required />
                <button type='submit'>Create Blog</button>
            </form>
            {user && (
                <Popup trigger={<button>Create Blog</button>}>
                    <div>
                        <p>Please log in to create a blog!</p>
                    </div>
                </Popup>
            )}
        </div>
    )
}
