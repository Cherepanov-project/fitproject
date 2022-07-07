import { API_TOKEN_REFRESH } from "../../constants/urls"
import axios from "axios"
import Cookies from "js-cookie"

const timeout = 60
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
        const refreshToken = Cookies.get("refreshToken")
        try {
            const { data } = axios.post(API_TOKEN_REFRESH, refreshToken)
        } catch (error) {
            throw new Error(error)
        }
    }
}

export const activityChecker = () => {
    const currentTime = Date.now()
    if (currentTime - lastActivity > timeout) {
        userIsActive = false
    } else {
        userIsActive = true
    }
}
