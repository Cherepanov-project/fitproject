import axios from "axios"
import Cookies from "js-cookie"

import {
    API_SERVER,
    API_AUTH_ADMIN,
    API_GET_STATISTICS,
    API_WORKOUTS,
    API_REGISTER_USER
} from "../constants/urls"

const adminToken = String(Cookies.get('auth-token')).replace(/\"/g, '')
const userToken = Cookies.get('user-token')
//console.log(adminToken);

//adminToken = adminToken.replace(/^\"/, '', adminToken).replace(/\"$/, '', adminToken);
//user-token:"%22eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsImV4cCI6MTY1ODE0MjU1NiwiaWF0IjoxNjU4MTI0NTU2fQ.ChglKg7EkjS_cE2R4QcPbhppvDLbFm2cqG47WqvamfEpBvdsBu_XvbQlyC-Vr_-rev3iwLU2VbdEO-kAY-7Evw%22"

const instanceWorkouts = axios.create({
    baseURL: API_WORKOUTS,
    headers: {
      Authorization: `Bearer ${adminToken}`,
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
        Authorization: `Bearer ${adminToken}`,
    },
})

const instanceRegisterUser = axios.create({
    baseURL: API_REGISTER_USER,
    headers: {
        Authorization: adminToken,
    },
})

export { instanceAuth, instanceStatistics, instanceWorkouts, instanceAdmin, instanceRegisterUser }
