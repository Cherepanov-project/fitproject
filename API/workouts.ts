import { instanceWorkouts } from "./inctances"

const getWorkoutList = async () => {
    const response = await instanceWorkouts.get("/")
    return response.data.data.content
}

// Заглушка для АПИ под категории упражнений
const getWorkoutCategoriesList = async () => {
    const response = await instanceWorkouts.get("categories")
    return response.data
}

export { getWorkoutList, getWorkoutCategoriesList }
