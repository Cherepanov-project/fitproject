export interface IRecipeFormProps {
    title: string
    recipeData?: { 
        id: string; 
        description: string, 
        name: string,
        calorie: number,
        protein: number,
        fat: number,
        carbohydrate: number,
        picUrl: string
    }
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
    pickUrl: string
}

export interface IRecipesArr {
    data: {
        content: IRecipe[]
        totalElements: number;
    }

}
