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
    const response = axios.post(`${baseURL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })

    if (response.ok) {
        const token = await response.json()
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

    // const res = axios.get(`${baseURL}/`)
    // const response = await fetch(`${baseURL}/users`, {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     },
    // });

    // if (response.ok) {
    //     const user = await response.json()
    //     return user
    // } else {
    //     throw new Error('Failed to fetch user data')
    // }
}