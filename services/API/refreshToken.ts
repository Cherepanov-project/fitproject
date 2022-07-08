import { API_TOKEN_REFRESH } from "../../constants/urls"
import axios from "axios"
import Cookies from "js-cookie"
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../constants/titles"
const timeout = 6000
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
            console.log(data)
        } catch (error) {
            console.log(error)
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
