import axios from "axios"

const endpointsAuth = {
    registration: data => axios.post("users", data),
    login: data => axios.post("users/login", data),
    getUser: () => axios.get("user"),
    updateProfile: data => axios.put("user", data),
}

export default endpointsAuth
