import React from 'react'

import BlogCard from '../components/BlogCard'
import NavBar from '../components/NavBar'

export default function Blog({ blogs }) {

  console.log(blogs)

  return (
    <>
    <div>
      {blogs ? blogs.map((blog, id) => {
        return (
            <BlogCard blog={blog} />
        )
      }) : <div>loading...</div>}
    </div>
    </>
  )
}
