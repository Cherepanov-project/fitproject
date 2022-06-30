import axios from "axios"

import {
    API_LOGIN_USER,
    API_REGISTER_USER,
    API_SOCIAL,
} from "../../constants/urls"
import {
    ILoginForm,
    IRegisterForm,
    IRegisterRequest,
    ILoginResponseSuccess,
    ILoginResponseError,
} from "../../models/loginOrRegisterInterfaces/interfaces"

export const loginUser = async (user: ILoginForm) => {
    try {
        const { data } = await axios.post<ILoginResponseSuccess>(
            API_LOGIN_USER,
            user
        )
        return data
    } catch (error) {
        return error as ILoginResponseError
    }
}

export const registerUser = async (user: IRegisterRequest) => {
    try {
        const { data } = await axios.post(API_REGISTER_USER, user)
        return data
    } catch (error) {
        return error
    }
}

//возвращает токен с сервера для логина или регистрации
export const loginUserWithSocials = async (code: string | string[]) => {
    const { data } = await axios.post(API_SOCIAL, { data: { code } })
    return data
}
