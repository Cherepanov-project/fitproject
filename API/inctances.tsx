import axios from "axios"
import Cookies from "js-cookie"

import {
    API_ADMIN,
    API_AUTH,
    API_GET_STATISTICS,
    API_WORKOUTS,
} from "../constants/urls"

const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjEiLCJleHAiOjE2NTcyMTA2MTYsImlhdCI6MTY1NzE5MjYxNn0.Zu4IMHjPGHN88OutE0Qd6A1XdjcBC-jx2DWSzZSQvTDK1VtsohE-hcnQeqvYPC9QR6-n5Rjh5eKqnBXEztdFSA"

const instanceWorkouts = axios.create({
    baseURL: API_WORKOUTS,
    headers: {
        Authorization: `Bearer ${token}`,
    },
})

const instanceStatistics = axios.create({
    baseURL: API_GET_STATISTICS,
    headers: {
        Authorization: `Bearer ${token}`,
    },
})

const instanceAuth = axios.create({
    baseURL: API_AUTH,
    headers: {
        Authorization: `Bearer ${token}`
    },
})

const instanceAdmin = axios.create({
    baseURL: API_ADMIN,
    headers: {
        Authorization: `Bearer ${token}`
    },
})

instanceAuth.interceptors.request.use(
    config => {
        const authToken = Cookies.get("auth-token")

        if (authToken) {
            config.headers.authorization = `Token ${authToken}`
        }
        return config
    },
    error => Promise.reject(error)
)

export { instanceAuth, instanceStatistics, instanceWorkouts, instanceAdmin }
