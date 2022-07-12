import { IPutRecipe, IPostRecipe } from "./api.interface"
import { instanceAdmin } from "./inctances"
import { IRecipesArr } from "../components/RecipeForm/recipeForm.interface"

export const getRecipesList = async () => {
    const response = await instanceAdmin.get<IRecipesArr>('/api/v1/admin/recipe')
    return response.data.data.content
}

export const postRecipe = async (data: IPostRecipe) => {
    const response = await instanceAdmin.post('/api/v1/admin/recipe', data)
    return response.data
}

export const getRecipeById = async (id: number) => {
    const response = await instanceAdmin.get(`/api/v1/admin/recipe/${id}`)
    return response.data
}

export const putRecipeUpdate = async (data: IPutRecipe) => {
    const response = await instanceAdmin.put('/api/v1/admin/recipe', data)
    return response.data
}
