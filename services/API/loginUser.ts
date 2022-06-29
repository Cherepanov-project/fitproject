import axios from "axios"

import {
    ILoginForm,
    IRegisterForm,
} from "../../model/loginOrRegisterInterfaces/interfaces"

import { API_LOGIN_USER, API_REGISTER_USER, API_SOCIAL } from "../../utils/urls"

export const loginUser = async (user: ILoginForm) => {
    const { data: res } = await axios.post(API_LOGIN_USER, { user })
    return res
}

export const registerUser = async (user: IRegisterForm) => {
    const { data: res } = await axios.post(API_REGISTER_USER, { user })
    return res
}

//возвращает токен с сервера для логина или регистрации
export const loginUserWithSocials = async (code: string | string[]) => {
    const { data } = await axios.post(API_SOCIAL, { data: { code } })
    return data
}
