import React from 'react'

import { useState, useEffect } from 'react'

import { makeComment } from '../services/blog-api'

export default function BlogCard({ blog }) {

  const [comments, setComments] = useState(null)
  const [newComment, setNewComment] = useState({
    entry: ''
  })

  console.log(blog.blog._id)

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



  return (
    <div>
      <section>
        <h2>{blog.blog.title}</h2>
        <article>{blog.blog.entry}</article>
      </section>
      <section>
        <h2>Comments:</h2>
        {blog.comments.map((comment) => {
          return (
            <div>
              <p>{comment.entry}</p>
            </div>
          )
        })}
        <p>Add a comment:</p>
        <form onSubmit={handleSubmit}>
          <input type='text' name='entry' value={newComment.entry} onChange={handleChange} />
          <button type='submit'>Add Comment</button>
        </form>
      </section>
    </div>
  )
}
