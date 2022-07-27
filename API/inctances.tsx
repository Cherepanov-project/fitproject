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
    API_TOKEN_REFRESH,
    API_GET_USERS
} from "@/constants/urls"

const accessToken = Cookies.get(ACCESS_TOKEN)

const instanceWorkouts = axios.create({
    baseURL: API_WORKOUTS,
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
})

const instanceRecipes = axios.create({
    baseURL: API_RECIPES,
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
})

const instanceStatistics = axios.create({
    baseURL: API_GET_STATISTICS,
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
})

const instanceAuth = axios.create({
    baseURL: API_AUTH_ADMIN,
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
})

const instanceAdmin = axios.create({
    baseURL: API_SERVER,
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
})

const instanceTokenRefresh = axios.create({
    baseURL: API_TOKEN_REFRESH,
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
})

const instanceRegisterUser = axios.create({
    baseURL: API_REGISTER_USER,
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
})

const instanceUsers = axios.create({
    baseURL: API_GET_USERS,
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
})

export {
    instanceAuth,
    instanceStatistics,
    instanceWorkouts,
    instanceRecipes,
    instanceAdmin,
    instanceRegisterUser,
    instanceTokenRefresh,
    instanceUsers
}
