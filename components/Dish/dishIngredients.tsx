import generateId from "../../utils/generateId"
import React from "react"

import chickenFood from "/common/images/chickenFood.svg"
import { IFoodItemType } from "../../models/dish/dish"
import {
    IngredientsItem,
    IngredientsItemImg,
    IngredientsItemText,
} from "./dish.styles"

interface IDishIngredientsProps {
    foodItem: IFoodItemType
}

const DishIngredients: React.FC<IDishIngredientsProps> = ({ foodItem }) => {
    const viewIngredients = 4
    const foodIngredients = foodItem.activeIngredients
        ? foodItem.ingredients.slice(0, viewIngredients)
        : foodItem.ingredients

    const items = foodIngredients.map(el => {
        return (
            <IngredientsItem key={generateId()}>
                <IngredientsItemImg imgUrl={chickenFood.src} />
                <IngredientsItemText>
                    <div>{el.ingredient}</div>
                    <div>{el.quantity}</div>
                </IngredientsItemText>
            </IngredientsItem>
        )
    })
    return <>{items}</>
}

export default DishIngredients
