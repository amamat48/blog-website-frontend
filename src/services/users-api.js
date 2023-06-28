import axios from 'axios'
// const baseURL = 'http://localhost:3001/user'
const baseURL = 'https://backend-express-amari.onrender.com/user'

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
    const response = await axios.post(`${baseURL}/signup`, userData)
    console.log(response)

    if (response.status === 200) {
        const token = await response.data

        let tokenPayload = token.split('.')[1]
        let decodedToken = JSON.parse(atob(tokenPayload))
        console.log(decodedToken.newUser)

        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(decodedToken))

        return getUserFromLocalStorage()
    } else {
        throw Error('Invalid Sign Up')
    }
}

export function getUserFromLocalStorage() {
    const user = localStorage.getItem('user')

    return JSON.parse(user)
}

export async function login(userData) {
    const response = await axios.post(`${baseURL}/login`, userData);

    if (response.status === 200) {
      const { token, user } = response.data;
      console.log(response)
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } else {
      throw new Error('Invalid Log in');
    }
  }
// export async function login(userData) {
//     const response = await axios.post(`${baseURL}/login`, userData)

//     if (response.status === 200) {
//         const token = await response.data;
//         const user = jwt.decode(token).user
//         localStorage.setItem('token', token)
//         return user
//     } else {
//         throw new Error('Invalid Log in')
//     }
// }