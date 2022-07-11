import { API_GET_STATISTICS } from "../constants/urls"
import { instanceStatistics } from "./inctances"

export const getUserStatistics = async () => {
    const response = await instanceStatistics.get("/")
    return response.data
}
