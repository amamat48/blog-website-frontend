import React from 'react'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import { deleteBlog, makeComment } from '../services/blog-api'

export default function BlogCard({ blog, user }) {

  console.log(blog)

  const [comments, setComments] = useState(null)
  const [newComment, setNewComment] = useState({
    entry: '',
    user: user._id

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
      await makeComment(blog.blog._id, newComment)

      window.location.reload()

    } catch (err) {
      console.error(err)
    }
  }

  const handleDelete = async (e) => {
    await deleteBlog(blog.blog._id)
  }

  return (
    <div className='cardContainer'>
      <section className='post'>
        <Link to={`/blogs/${blog.blog._id}`}><h1>{blog.blog.title}</h1></Link>
        <article>{blog.blog.entry}</article>
        <button className='deleteButton' onClick={handleDelete}>DELETE</button>
        <button className='editButton'><Link to={`/blogs/edit/${blog.blog._id}`}>EDIT</Link></button>
      </section>
      <section className='comment'>
        <h2>Comments:</h2>
        {blog.comments.map((comment) => {
          return (
            <div>
              <p>{comment.comment.entry}</p>
              {comment.user && <p>By: {comment.user}</p>}
            </div>
          )
        })}
        <p>Add a comment:</p>
        <form onSubmit={handleSubmit}>
          <input className='commentInput' type='text' name='entry' value={newComment.entry} onChange={handleChange} />
          <button className='commentButton' type='submit'>Add Comment</button>
        </form>
        <div>
          {!blog.user && <p>Made by Owner</p>}
          {blog.user && <p>Made by: {blog.user.name}</p>}
        </div>
      </section>
    </div>
  )
}
