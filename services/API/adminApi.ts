import axios from "axios"
import { IRecipesArr, IAddRecip } from "../../models/recipies/recipiesList"

const adminApi = axios.create({
    baseURL: "https://spring-boot-fitness-backend.herokuapp.com",
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1Njg2MzU4NCwiaWF0IjoxNjU2ODQ1NTg0fQ.Dkm9PApK_KFBoU-C3-J98CaPFG31HBdhamKSfpVaDvCFd0_LByTB1ZNWCNVO2NN8AnKRlCXVuzsqKVhQkwHvSw",
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
