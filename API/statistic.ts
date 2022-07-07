import axios from "axios"

import { API_GET_STATISTICS } from "../constants/urls"

const getUserStatistics = async (token: string) => {
    const { data } = await axios.get(API_GET_STATISTICS, {
        headers: {
            Authentication: token,
        },
    })
    return data
}

export default getUserStatistics
