import React from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'
import { editBlog, getOneBlog } from '../services/blog-api'

export default function EditBlog() {

    const [oldBlogData, setOldBlogData] = useState(null)
    const [newBlogData, setNewBlogData] = useState({
        title: '',
        entry: ''
    })
    const { id } = useParams()

    const navigate = useNavigate()



    const handleChange = (e) => {
        setNewBlogData({
            ...newBlogData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await editBlog(id, newBlogData)
                .then(() => {
                    navigate('/blogs')
                })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const fetchBlogData = async () => {
            const response = await getOneBlog(id)
            setOldBlogData(response.data)
            console.log(response.data.Blog)
        }
        fetchBlogData()
    }, [])


    return (
        <div>
            {oldBlogData ?
                <>
                    <h1>Edit Blog</h1>
                    <form className='editFormContainer' onSubmit={handleSubmit}>
                        Title: <input type='text' name='title' value={newBlogData.title} defaultValue={oldBlogData.Blog.title} onChange={handleChange} />
                        Entry: <input type='text' name='entry' value={newBlogData.entry} defaultValue={oldBlogData.Blog.entry} onChange={handleChange} />
                        <button type='submit'>submit</button>
                    </form>
                </>
                :
                <div>Loading...</div>
            }
            
        </div>
    )
}
