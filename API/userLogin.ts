import axios from "axios"

import { API_SOCIAL } from "@/constants/urls"
import { instanceAuth } from "./inctances"
import {
    ILoginForm,
    ILoginOrRegisterResponseError,
} from "@/models/loginOrRegisterInterfaces/interfaces"

export const postLoginUser = async (user: ILoginForm) => {
    try {
        const { data } = await instanceAuth.post("/", user)
        return data
    } catch (error) {
        return error as ILoginOrRegisterResponseError
    }
}

//возвращает токен с сервера для логина или регистрации
export const loginUserWithSocials = async (code: string | string[]) => {
    const { data } = await axios.post(API_SOCIAL, { data: { code } })
    return data
}
