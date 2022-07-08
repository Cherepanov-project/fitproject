import axios from "axios"
import Cookies from "js-cookie"

import {
    API_SERVER,
    API_AUTH_ADMIN,
    API_GET_STATISTICS,
} from "../constants/urls"

const token = localStorage.getItem('token')

const instanceWorkouts = axios.create({
    baseURL: API_SERVER,
    headers: {
        Authorization: token,
    },
})

const instanceStatistics = axios.create({
    baseURL: API_GET_STATISTICS,
    headers: {
        Authorization: token,
    },
})

const instanceAuth = axios.create({
    baseURL: API_AUTH_ADMIN,
    headers: {
        Authorization: token,
    },
})

const instanceAdmin = axios.create({
    baseURL: API_SERVER,
    headers: {
        Authorization: token,
    },
})

instanceAuth.interceptors.request.use(
    config => {
        const authToken = Cookies.get("auth-token")
        console.log(authToken)
        if (authToken) {
            config.headers.authorization = `Token ${authToken}`
        }
        return config
    },
    error => Promise.reject(error)
)

export { instanceAuth, instanceStatistics, instanceWorkouts, instanceAdmin }
