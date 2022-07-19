import { IPutRecipe, IPostRecipe } from "./api.interface"
import { instanceRecipes} from "./inctances"
import { IRecipesArr } from "@/components/EditFormRecipe/editFormRecipe.interface"

export const getRecipesList = async () => {
    const response = await instanceRecipes.get<IRecipesArr>('/')
    return response.data.data.content
}

export const postRecipe = async (data: IPostRecipe) => {
    const response = await instanceRecipes.post('/', data)
    return response.data
}

export const getRecipeById = async (id: number) => {
    const response = await instanceRecipes.get(`/${id}`)
    return response.data
}

export const putRecipeUpdate = async (data: IPutRecipe) => {
    const response = await instanceRecipes.put('/', data)
    return response.data
}

export const deleteRecipeById = async (id: number) => {
    const response = await instanceRecipes.put(`/${id}`)
    return response.data
}
