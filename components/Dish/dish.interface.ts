import {IFoodItemType} from "../../models/dish/dish";

export interface IImg {
    imgUrl: any
}

export interface IDisplayContainer {
    $display?: boolean
}

export interface IDishIngredientsProps {
    foodItem: IFoodItemType
}
