import generateId from "../../utils/generateId"
import { FC } from "react"
import {
    IndigrientItem,
    IndigrientItemImg,
    IndigrientItemText,
} from "./stylesDish"
import chickenFood from "/common/images/chickenFood.svg"

import { IFoodItemType } from "../../models/dish/dish"

interface DishIndigrientsProps {
    foodItem: IFoodItemType
}

const DishIndigrients: FC<DishIndigrientsProps> = ({ foodItem }) => {
    const viewIndigrients = 4
    const foodIndigrients = foodItem.activeIndigrients
        ? foodItem.indigrients.slice(0, viewIndigrients)
        : foodItem.indigrients

    const items = foodIndigrients.map(el => {
        return (
            <IndigrientItem key={generateId()}>
                <IndigrientItemImg imgUrl={chickenFood.src}></IndigrientItemImg>
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
