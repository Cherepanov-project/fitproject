import Cookies from "js-cookie"

import { ILoginOrRegisterResponseError } from "../models/loginOrRegisterInterfaces/interfaces"
import { instanceAdmin } from "./inctances"

export const postAdminToken = async (data) => {
    try {
        const response = await instanceAdmin.post('/api/v1/authenticate', data)
        console.log(response)
        Cookies.set('auth-token', response.data.data.jwtToken)
        return response.data
    }
    catch (error) {
        return error as ILoginOrRegisterResponseError
    }
}

export const postRefreshAdminToken = async (token) => {
    const response = await instanceAdmin.post('/api/v1/authenticate/refresh')
    Cookies.set('auth-token', response.data.data.jwtToken)
    return response.data.data.jwtToken
}
