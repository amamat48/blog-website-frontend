import React from 'react'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { getOneBlog, makeComment } from '../services/blog-api'


export default function SingleBlog() {

    const { id } = useParams()
    console.log(id)

    const [blog, setBlog] = useState(null)

    const [comments, setComments] = useState(null)
    const [newComment, setNewComment] = useState({
      entry: ''
    })

    const handleChange = (e) => {
      setNewComment({
        ...newComment,
        [e.target.name]: e.target.value
      })
    }

    const handleSubmit = async (e) => {
      e.preventDefault()

      try {
        await makeComment(blog.Blog._id, newComment)
        window.location.reload()

      } catch (err) {
        console.error(err)
      }
    }

    useEffect(() => {
        const fetchOneBlog = async () => {
            const response = await getOneBlog(id)
            console.log(response.data)
            setBlog(response.data)
        }
        fetchOneBlog()
    }, [id])

    return (
        <div>
            {blog ?
                <div className='singleCardContainer'>
                    <h1>{blog.Blog.title}</h1>
                    <p>{blog.Blog.entry}</p>
                    <h3>Comments:</h3>
                    {blog.comments.map((comment) => {
                        return (
                            <div key={comment._id}>
                                <p>{comment.entry}</p>
                            </div>
                        )
                    })}
                    <p>Add a comment:</p>
                    <form onSubmit={handleSubmit}>
                        <input type='text' name='entry' value={newComment.entry} onChange={handleChange} />
                        <button type='submit'>Add Comment</button>
                    </form>
                </div>
                :
                <div>
                    loading...
                </div>
            }
        </div>
    )
}
