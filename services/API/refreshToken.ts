import { API_TOKEN_REFRESH } from "../../constants/urls"
import axios from "axios"
import Cookies from "js-cookie"
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../constants/titles"
const inactiveTimeout = 3600_000 // 1 hour
let lastActivity = Date.now()
let userIsActive = true
const setLastActivity = () => (lastActivity = Date.now())

window.addEventListener("mousedown", setLastActivity)
window.addEventListener("mousemove", setLastActivity)
window.addEventListener("keydown", setLastActivity)
window.addEventListener("scroll", setLastActivity)
window.addEventListener("touchstart", setLastActivity)

export const refreshToken = () => {
    if (userIsActive) {
        const refreshToken = Cookies.get(REFRESH_TOKEN)
        try {
            const data = axios.post(API_TOKEN_REFRESH, refreshToken)
            // Cookies.set(ACCESS_TOKEN, data.accessToken)
            // Cookies.set(REFRESH_TOKEN, data.refreshToken)
        } catch (error) {
            console.log(error)
        }
    }
}

export const activityChecker = () => {
    const currentTime = Date.now()
    if (currentTime - lastActivity > inactiveTimeout) {
        userIsActive = false
    } else {
        userIsActive = true
    }
}
