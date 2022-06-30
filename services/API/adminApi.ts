import axios from "axios"
import { IRecipesArr, IAddRecip } from "../../models/recipies/recipiesList"

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
                "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NjYyODkwMSwiaWF0IjoxNjU2NjEwOTAxfQ.0vdNsIVPo4ls-wfkMbnwlMZAjNnx81_iunTZL_mPNn--edakjYlAVo0khyiR1fNvwGrucnvPm11DvzVgOBYL1A",
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
                    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NjYyODkwMSwiaWF0IjoxNjU2NjEwOTAxfQ.0vdNsIVPo4ls-wfkMbnwlMZAjNnx81_iunTZL_mPNn--edakjYlAVo0khyiR1fNvwGrucnvPm11DvzVgOBYL1A",
            },
        }
    )

    // return response
}
