import React from 'react'

import BlogCard from '../components/BlogCard'
import NavBar from '../components/NavBar'

export default function Blog({ blogs, user }) {

  return (
    <>
    <div>
      {blogs ? blogs.map((blog, id) => {
        return (
            <BlogCard blog={blog} user={user} />
        )
      }) : <div>loading...</div>}
    </div>
    </>
  )
}
