import axios from "axios"
import Cookies from "js-cookie"

import {
    API_AUTH,
    API_GET_STATISTICS,
    API_WORKOUTS,
} from "../../constants/urls"

const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NjM3NzYyMSwiaWF0IjoxNjU2MzU5NjIxfQ.pB2q96w6CMZNrfmFSC78an1h-2d4MK03h87uQTSWYgzRgqQwzquXSX-YHa7HpZDP6M9PGr0ecYIApJNPTgsNOA"

const instanceWorkouts = axios.create({
    baseURL: API_WORKOUTS,
    responseType: "json",
    headers: {
        Authorization: `Bearer ${token}`,
    },
})

const instanceStatistics = axios.create({
    baseURL: API_GET_STATISTICS,
    responseType: "json",
    headers: {
        Authorization: `Bearer ${token}`,
    },
})

const instanceAuth = axios.create({
    baseURL: API_AUTH,
    responseType: "json",
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

export { instanceAuth, instanceStatistics, instanceWorkouts }
