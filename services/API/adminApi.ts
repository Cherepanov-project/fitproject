import axios from "axios"
import { IRecipesArr, IAddRecip } from "../../models/recipies/recipiesList"

const adminApi = axios.create({
    baseURL: "https://spring-boot-fitness-backend.herokuapp.com",
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NzE0Nzc2MywiaWF0IjoxNjU3MTI5NzYzfQ.QKwiMeUVyq79YFH2t_MEz4weiQIJ5jMUsz2iqTV3gPXhH9LdZZpuEulcBxuxmi0yl1Jtc_Ex-NMkgR2nV68Kug"
    },
})
export const getRecipesList = async () => {
    const response = await adminApi.get<IRecipesArr>("/api/v1/admin/recipe")

    return response.data
}

export const postRecipes = async (data: IAddRecip) => {
    await adminApi.post(
        "/api/v1/admin/recipe",

        data
        // {
        //     headers: {
        //         Authorization:
        //             "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NjY5MzcwNSwiaWF0IjoxNjU2Njc1NzA1fQ.cutJ1rfX8nH4xP7lKf9m_xPc3xkG5dJTRM_KkvJz4nUw9HvXi_JiimNWQ3Putsh6SXsgqCX7TvLtkrAmlZK9Ug",
        //     },
        // }
    )
}

export const getRecipeById = async (id: number) => {
    const response = await adminApi.get(`/api/v1/admin/recipe/${id}`)

    return response.data
}

export const updataRecipe = async (data: {
    id: number
    description: string
}) => {
    const response = await adminApi.put("/api/v1/admin/recipe", data)

    return response.data
}
