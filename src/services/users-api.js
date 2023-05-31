import axios from 'axios'
const baseURL = 'http://localhost:3001/user'

// export const getUser = () => {
//     const URL = baseURL
//     const response = axios.get(URL)
//     return response
// }

export const editUser = (id, updatedUser) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedUser)
    return response
}

export const deleteUser = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}



export async function signUp(userData) {
    const response = await axios.post(`${baseURL}/signup`,userData)

    console.log(response)
    if (response.status === 200) {
        const token = await response.data
        localStorage.setItem('token', token)
        return getTokendUser()
    } else {
        throw new Error('Invalid Sign Up')
    }
}


export function getToken() {
    const token = localStorage.getItem('token')
    // Handle token expiration and validation here...
    return token
}

export async function getTokendUser() {
    const token = getToken();

    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export async function login(userData) {
    const response = await axios.post(`${baseURL}/login`, userData)

    if (response.status === 200) {
        const token = await response.data
        localStorage.setItem('token', token)
    } else {
        throw new Error('Invalid Log in')
    }
}