export interface IRecipeFormProps {
    title: string
    recipeData?: { id: string; description: string }
}

interface IRecipe {
    id: number
    name: string
    description: string
    calorie: number
    protein: number
    fat: number
    carbohydrate: number
    products: any[]
}

export interface IRecipesArr {
    data: IRecipe[]
}
