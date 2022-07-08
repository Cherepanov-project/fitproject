import { API_TOKEN_REFRESH } from "../../constants/urls"
import axios from "axios"
import Cookies from "js-cookie"
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../constants/titles"
import redirectToLoginPage from "../../utils/redirect"
import {
    ILoginResponseSuccess,
    ILoginOrRegisterResponseError,
} from "../../models/loginOrRegisterInterfaces/interfaces"

const inactiveTimeout = 3600_000 // 1 hour
let lastActivity = Date.now()
let userIsActive = true
const setLastActivity = () => (lastActivity = Date.now())

window.addEventListener("mousedown", setLastActivity)
window.addEventListener("mousemove", setLastActivity)
window.addEventListener("keydown", setLastActivity)
window.addEventListener("scroll", setLastActivity)
window.addEventListener("touchstart", setLastActivity)

export const refreshToken = async () => {
    if (userIsActive) {
        const accessToken = JSON.parse(Cookies.get(ACCESS_TOKEN))
        const headers = {
            headers: { Authorization: `Bearer ${accessToken}` },
        }
        const { data } = await axios.post<
            ILoginResponseSuccess | ILoginOrRegisterResponseError
        >(API_TOKEN_REFRESH, {}, headers)

        if (data.success === true) {
            Cookies.set(ACCESS_TOKEN, JSON.stringify(data.data.jwtToken))
        } else {
            console.log(data.error)
        }
    }
}

export const activityChecker = () => {
    const currentTime = Date.now()
    if (currentTime - lastActivity > inactiveTimeout) {
        userIsActive = false
        Cookies.remove(ACCESS_TOKEN)
        redirectToLoginPage("/user")
    } else {
        userIsActive = true
    }
}
