import axios from "axios";

const endpoints = {
    registration: (data) => axios.post('users', data),
    login: (data) => axios.post('users/login', data),
    updateProfile:(data)=> axios.put('user', data),
}

export default endpoints;