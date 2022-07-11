import Cookies from "js-cookie"

import { ILoginOrRegisterResponseError } from "../models/loginOrRegisterInterfaces/interfaces"
import { instanceRegisterUser } from "./inctances"

export const postRegisterUser = async (data) => {
    try {
        const response = await instanceRegisterUser.post('/', data)
        return response.data
    }
    catch (error) {
        return error as ILoginOrRegisterResponseError
    }
}
