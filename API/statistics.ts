import { instanceStatistics } from "./inctances"

export const getUserStatistics = async () => {
    const response = await instanceStatistics.get("/")
    return response.data
}
