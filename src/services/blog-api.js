import axios from 'axios'
const baseURL = 'http://localhost:3001/blogs'

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
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, editedBlog)
}