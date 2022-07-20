import { IPutRecipe, IPostRecipe } from "./api.interface"
import { instanceRecipes} from "./inctances"
import { IRecipesArr } from "@/components/EditFormRecipe/editFormRecipe.interface"

export const getRecipesList = async (page: number, size: number) => {
    const response = await instanceRecipes.get<IRecipesArr>(`?page=${page}&size=${size}`)
    return response.data.data
    //return response.data.data.content
}

export const postRecipe = async (data: IPostRecipe) => {
    const response = await instanceRecipes.post('/', data)
    return response.data
}

export const getRecipeById = async (id: number) => {
    const response = await instanceRecipes.get(`/${id}`)
    return response.data.data
}

export const putRecipeUpdate = async (data: IPutRecipe) => {
    const response = await instanceRecipes.put('/', data)
    return response.data
}

export const deleteRecipeById = async (id: number) => {
    const response = await instanceRecipes.delete(`/${id}`)
    return response.data
}
