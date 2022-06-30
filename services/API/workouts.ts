import { instanceWorkouts } from "./inctances"

const fetchWorkouts = async () => {
    const { data } = await instanceWorkouts.get("api/v1/admin/exercise")
    return data
}

const fetchCategories = async () => {
    const { data } = await instanceWorkouts.get("categories")
    return data
}

export { fetchWorkouts, fetchCategories }
