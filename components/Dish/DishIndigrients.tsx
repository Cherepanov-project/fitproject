import generateId from "../../utils/generateId"
import React from "react"

import chickenFood from "/common/images/chickenFood.svg"
import { IFoodItemType } from "../../models/dish/dish"
import {
    IndigrientItem,
    IndigrientItemImg,
    IndigrientItemText,
} from "./stylesDish"

interface IDishIngredientsProps {
    foodItem: IFoodItemType
}

const DishIndigrients: React.FC<IDishIngredientsProps> = ({ foodItem }) => {
    const viewIndigrients = 4
    const foodIndigrients = foodItem.activeIndigrients
        ? foodItem.indigrients.slice(0, viewIndigrients)
        : foodItem.indigrients

    const items = foodIndigrients.map(el => {
        return (
            <IndigrientItem key={generateId()}>
                <IndigrientItemImg imgUrl={chickenFood.src} />
                <IndigrientItemText>
                    <div>{el.indigrient}</div>
                    <div>{el.quantity}</div>
                </IndigrientItemText>
            </IndigrientItem>
        )
    })
    return <>{items}</>
}

export default DishIndigrients
