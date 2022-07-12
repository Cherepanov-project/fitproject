import Cookies from "js-cookie"

import { ACCESS_TOKEN } from "../constants/titles"
import { ILoginOrRegisterResponseError } from "../models/loginOrRegisterInterfaces/interfaces"
import { instanceAdmin } from "./inctances"

export const postAdminToken = async (data) => {
    try {
        const response = await instanceAdmin.post('/api/v1/authenticate', data)
        return response.data
    }
    catch (error) {
        return error as ILoginOrRegisterResponseError
    }
}

export const postRefreshAdminToken = async (token) => {
    const response = await instanceAdmin.post('/api/v1/authenticate/refresh')
    Cookies.set(ACCESS_TOKEN, response.data.data.jwtToken)
    return response.data.data.jwtToken
}
