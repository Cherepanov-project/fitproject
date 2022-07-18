import Cookies from "js-cookie"

import { ACCESS_TOKEN } from "../constants/titles"
import redirectToLoginPage from "../utils/redirect"
import { ILoginOrRegisterResponseError } from "../models/loginOrRegisterInterfaces/interfaces"
import { instanceTokenRefresh } from "./inctances"

const inactiveTimeout = 3600_000 // 1 hour
let lastActivity = Date.now()
let userIsActive = true
const setLastActivity = () => (lastActivity = Date.now())

if (typeof window !== "undefined") {
    window.addEventListener("mousedown", setLastActivity)
    window.addEventListener("mousemove", setLastActivity)
    window.addEventListener("keydown", setLastActivity)
    window.addEventListener("scroll", setLastActivity)
    window.addEventListener("touchstart", setLastActivity)
}

export const postRefreshToken = async () => {
    if (userIsActive) {
        try {
            const { data } = await instanceTokenRefresh.post("/")
            if (data.success) {
                Cookies.set(ACCESS_TOKEN, data.data.jwtToken)
            }
        }
        catch (error) {
            return error as ILoginOrRegisterResponseError
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
