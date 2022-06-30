import axios from "axios"

import {
    API_LOGIN_USER,
    API_REGISTER_USER,
    API_SOCIAL,
} from "../../constants/urls"
import {
    ILoginForm,
    IRegisterForm,
} from "../../models/loginOrRegisterInterfaces/interfaces"

const loginUser = async (user: ILoginForm) => {
    const { data: res } = await axios.post(API_LOGIN_USER, { user })
    return res
}

const registerUser = async (user: IRegisterForm) => {
    const { data: res } = await axios.post(API_REGISTER_USER, { user })
    return res
}

//возвращает токен с сервера для логина или регистрации
const loginUserWithSocials = async (code: string | string[]) => {
    const { data } = await axios.post(API_SOCIAL, { data: { code } })
    return data
}

export { loginUser, registerUser, loginUserWithSocials }
