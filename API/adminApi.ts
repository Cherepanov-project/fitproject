import axios from "axios"
import { IRecipesArr, IAddRecip } from "../model/recipies/recipiesList"

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
                "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NjU5NDc4OSwiaWF0IjoxNjU2NTc2Nzg5fQ._bT8w8xVBm8V-c-Mn6XqF9bguTJZWylwlQN8osGzFJdAlYjNwBSdi5Lntfl_Sw-cOSglqaTjfPSdV-f9VaYLRw",
        },
    })

    return response.data
}

export const postRecipes = async (obj: IAddRecip) => {
    await adminApi.post(
        "/api/v1/admin/recipe",

        obj,
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NjYwMzMyMCwiaWF0IjoxNjU2NTg1MzIwfQ.Ek_RyGyp6cusxfHqa5vQN6i0y4vj10xpx27wByA05U_C9W69a4_xFxPjrL2woasBiNWw2ElXHSa8MPOswVAKeg",
            },
        }
    )

    // return response
}
