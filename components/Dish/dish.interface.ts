import { IIngredientsType, INutritionValueType } from "../../models/models.interface";

export interface IImg {
    imgUrl: any
}

export interface IDisplayContainer {
    $display?: boolean
}

export interface IDishIngredientsProps {
    foodItem: IFoodItemType
}

export interface IFoodItemType {
    id: string
    namesFood: string
    activeRecipe: boolean
    star: number
    activeIngredients: boolean
    description: string
    ingredients: IIngredientsType[]
    nutritionValue: INutritionValueType[]
}
