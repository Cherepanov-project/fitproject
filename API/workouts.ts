import {instanceAdmin, instanceWorkouts} from "./inctances"

export const getWorkoutList = async () => {
    const response = await instanceWorkouts.get("/")
    return response.data.data.content
}

export const postWorkout = async (data) => {
    const response = await instanceWorkouts.post('/', data)
    return response.data
}

export const getWorkoutById = async (id: number) => {
    const response = await instanceWorkouts.get(`/${id}`)
    return response.data
}

export const putWorkoutUpdate = async (data) => {
    const response = await instanceWorkouts.put('/', data)
    return response.data
}

export const deleteWorkoutById = async (id: number) => {
    const response = await instanceWorkouts.delete(`/${id}`)
    return response.data
}

// Заглушка для АПИ под категории упражнений
export const getWorkoutCategoriesList = async () => {
    const response = await instanceWorkouts.get("categories")
    return response.data
}
