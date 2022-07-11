import axios from "axios"
import Cookies from "js-cookie"

import {
    API_SERVER,
    API_AUTH_ADMIN,
    API_GET_STATISTICS,
    API_WORKOUTS,
    API_REGISTER_USER
} from "../constants/urls"

const adminToken = Cookies.get('auth-token')
const userToken = Cookies.get('user-token')

const instanceWorkouts = axios.create({
    baseURL: API_WORKOUTS,
    headers: {
        Authorization: adminToken,
    },
})

const instanceStatistics = axios.create({
    baseURL: API_GET_STATISTICS,
    headers: {
        Authorization: adminToken,
    },
})

const instanceAuth = axios.create({
    baseURL: API_AUTH_ADMIN,
    headers: {
        Authorization: adminToken,
    },
})

const instanceAdmin = axios.create({
    baseURL: API_SERVER,
    headers: {
        Authorization: adminToken,
    },
})

const instanceRegisterUser = axios.create({
    baseURL: API_REGISTER_USER,
    headers: {
        Authorization: adminToken,
    },
})

export { instanceAuth, instanceStatistics, instanceWorkouts, instanceAdmin, instanceRegisterUser }
