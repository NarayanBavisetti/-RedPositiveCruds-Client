import axios from 'axios'

// const url = "http://localhost:5000"
 const url = "https://mern-cruds.herokuapp.com"

export const getUsers = async () => {
 
    return await axios.get(`${url}/users`)
}
export const addUsers = async (data) => {
    return await axios.post(`${url}/add`,data)
}

export const updateUser = async (id,user) => {
    return await axios.put(`${url}/${id}`,user)
}

export const deleteUserData = async (id) => {
    return await axios.delete(`${url}/${id}`)
}