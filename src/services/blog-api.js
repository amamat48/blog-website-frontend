import axios from 'axios'

const baseURL = 'https://backend-express-amari.onrender.com/blogs'
// const baseURL = 'http://localhost:3001/blogs'

export const getAllBlogs = () => {
    const URL = baseURL
    const response = axios.get(URL)
    return response
}

export const getOneBlog = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response

}

export const createBlog = (createdBlog) => {
    const URL = baseURL
    const response = axios.post(URL, createdBlog)
    return response
}

export const editBlog = (id, editedBlog) => {
    const URL = `${baseURL}/edit/${id}`
    const response = axios.put(URL, editedBlog)
    return response
}

export const deleteBlog =(id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}

export const makeComment = (id, createdComment) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, createdComment)
    return response
}

