import React from "react"

import generateId from "@/utils/generateId"
import chickenFood from "/common/images/chickenFood.svg"
import { IngredientsItem, IngredientsItemImg, IngredientsItemText } from "./dish.styles"
import { IDishIngredientsProps } from "./dish.interface"

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
