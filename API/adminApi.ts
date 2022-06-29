import axios from "axios"
import { IRecipesArr } from "../model/recipies/recipiesList"

const adminApi = axios.create({
    baseURL: "https://spring-boot-fitness-backend.herokuapp.com",
    // headers: {
    //     Authorization:
    //         "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NjUxNTI1MywiaWF0IjoxNjU2NDk3MjUzfQ.rdzfGnNXqN4oN1QHQ8V7QONkjjmri7fMIO8NyQkQhnm8Caz0JgRNrnjZ_wRopsHhPQrWxXQlc5WmoWShZt8rMw",
    // },
})
export const getRecipesList = async () => {
    const response = await adminApi.get<IRecipesArr>("/api/v1/admin/recipe", {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NjU0NTkxNSwiaWF0IjoxNjU2NTI3OTE1fQ.nTepfPueBP-fSlYmQBeDSp9nR7L8GdcVLx8vbsSB6mM9ZdSrhvTA7npY0oC2lSAzJUeeUTfwD9qc7etdCLpDUw",
        },
    })

    return response.data
}

export const postRecipes = async obj => {
    await adminApi.post(
        "/api/v1/admin/recipe",
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NjU0NTkxNSwiaWF0IjoxNjU2NTI3OTE1fQ.nTepfPueBP-fSlYmQBeDSp9nR7L8GdcVLx8vbsSB6mM9ZdSrhvTA7npY0oC2lSAzJUeeUTfwD9qc7etdCLpDUw",
            },
        },
        {
            data: obj,
        }
    )
}
