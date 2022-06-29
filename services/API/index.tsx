import axios from "axios"
import Cookies from "js-cookie"

const axiosInctance = axios.create({
    baseURL: "https://api.realworld.io/api/",
})

axiosInctance.interceptors.request.use(
    config => {
        const authToken = Cookies.get("auth-token")

        if (authToken) {
            config.headers.authorization = `Token ${authToken}`
        }
        return config
    },
    error => Promise.reject(error)
)

export default axiosInctance
