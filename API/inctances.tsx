import axios from "axios"
import Cookies from "js-cookie"

import { ACCESS_TOKEN, USER_TOKEN } from "@/constants/titles"
import {
    API_SERVER,
    API_AUTH_ADMIN,
    API_GET_STATISTICS,
    API_WORKOUTS,
    API_RECIPES,
    API_REGISTER_USER,
    API_TOKEN_REFRESH
} from "@/constants/urls"

const adminToken = Cookies.get(ACCESS_TOKEN)
const userToken = Cookies.get(USER_TOKEN)

const instanceWorkouts = axios.create({
    baseURL: API_WORKOUTS,
    headers: {
        Authorization: `Bearer ${adminToken}`,
    },
})

const instanceRecipes = axios.create({
    baseURL: API_RECIPES,
    headers: {
        Authorization: `Bearer ${adminToken}`,
    },
})

const instanceStatistics = axios.create({
    baseURL: API_GET_STATISTICS,
    headers: {
        Authorization: `Bearer ${adminToken}`,
    },
})

const instanceAuth = axios.create({
    baseURL: API_AUTH_ADMIN,
    headers: {
        Authorization: `Bearer ${adminToken}`,
    },
})

const instanceAdmin = axios.create({
    baseURL: API_SERVER,
    headers: {
        Authorization: `Bearer ${adminToken}`,
    },
})

const instanceTokenRefresh = axios.create({
    baseURL: API_TOKEN_REFRESH,
    headers: {
        Authorization: `Bearer ${adminToken}`,
    },
})

const instanceRegisterUser = axios.create({
    baseURL: API_REGISTER_USER,
    headers: {
        Authorization: `Bearer ${adminToken}`,
    },
})

export {
    instanceAuth, instanceStatistics,
    instanceWorkouts, instanceRecipes,
    instanceAdmin,
    instanceRegisterUser, instanceTokenRefresh
}
