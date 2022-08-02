import Link from "next/link"
import React from "react"

import { IItemRationProps } from "../Calendar/calendarContainer.interface"
import {
    FoodLink, ListItem, ItemDiv, ButtonMenu, DropMenu, ButtonDiv
} from "../Calendar/calendarContainer.styles"

const ItemRation: React.FC<IItemRationProps> = ({ dietaEl, asPath, menuClickShow }) => {
    return (
        <ListItem>
            <ItemDiv>
                <div>{dietaEl.id}</div>
                <div>
                    <Link
                        href={{
                            pathname: `/user/calendar/dietaplan/${dietaEl.food}`,
                            query: { url: asPath, eating: dietaEl.id },
                        }}
                        passHref
                    >
                        <FoodLink>{dietaEl.food}</FoodLink>
                    </Link>
                </div>
            </ItemDiv>
            <ItemDiv color="#7B809A">{dietaEl.calories}</ItemDiv>
            <ItemDiv color="#7B809A">{dietaEl.nutritionValues}</ItemDiv>
            <ButtonDiv>
                <ButtonMenu onClick={() => menuClickShow(dietaEl.id)}>
                    ...
                </ButtonMenu>
                <DropMenu $display={dietaEl.active}>Меню</DropMenu>
            </ButtonDiv>
        </ListItem>
    )
}

export default ItemRation
