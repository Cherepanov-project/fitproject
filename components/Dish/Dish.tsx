import { useState } from "react"
import {
    DishComponent,
    DishItem,
    NutritionalItem,
    NutritionalContainer,
    IndigrientsContainer,
    FoodContainer,
    ButtonFood,
    DishDescriptionWrapper,
} from "./stylesDish"
import img from "/common/images/DishChikenImg.png"
import generateId from "../../utils/generateId"
import { IFoodItemType, dishFood } from "../../models/dish/dish"
import DishIndigrients from "./DishIndigrients"
import { LayoutUser } from "../../containers/Layout-user/Layout-user"
import HeadLinkBack from "../HeadLinkBack"
import { useRouter } from "next/router"

const Dish = () => {
    const { query } = useRouter()
    const [foodItem, setFoodItem] = useState<IFoodItemType>(dishFood)

    const indigrientsActive = () => {
        const activeIndigrientsMutan = {
            ...foodItem,
            activeIndigrients: !foodItem.activeIndigrients,
        }
        setFoodItem(activeIndigrientsMutan)
    }

    const recipiClickActive = () => {
        const activeRecipeMutan = {
            ...foodItem,
            activeRecipe: !foodItem.activeRecipe,
        }
        setFoodItem(activeRecipeMutan)
    }

    const favouritesAdd = () => {
        // Заглушка для будущего пока нету бэка
    }

    const itemNutritionalValue = foodItem.nutritionalValue.map(el => {
        return (
            <NutritionalItem key={generateId()}>
                <div>{el.value}</div>
                <div>{el.nutritiona}</div>
                <div>{el.units}</div>
            </NutritionalItem>
        )
    })

    return (
        <DishComponent imgUrl={img.src}>
            <HeadLinkBack
                backLink={`${query.url}`}
                namesCompoent={query.eating}
            />
            <DishItem>
                <DishDescriptionWrapper>
                    <h2>{foodItem.namesFood}</h2>
                    <p>{foodItem.description}</p>
                    <ButtonFood
                        $display={foodItem.activeRecipe}
                        onClick={recipiClickActive}
                    >
                        Закрыть
                    </ButtonFood>
                </DishDescriptionWrapper>
                <FoodContainer $display={foodItem.activeRecipe}>
                    <h3>Ingredients</h3>
                    <IndigrientsContainer>
                        <DishIndigrients foodItem={foodItem} />
                    </IndigrientsContainer>
                    <ButtonFood onClick={indigrientsActive}>
                        Просмотреть все ингредиенты
                    </ButtonFood>
                </FoodContainer>
                <FoodContainer $display={foodItem.activeRecipe}>
                    <h3>Пищевая ценность</h3>
                    <NutritionalContainer>
                        {itemNutritionalValue}
                    </NutritionalContainer>
                    <div>
                        <ButtonFood onClick={recipiClickActive}>
                            Рецепт
                        </ButtonFood>
                        <ButtonFood onClick={favouritesAdd}>
                            Добавить в избранное
                        </ButtonFood>
                    </div>
                </FoodContainer>
            </DishItem>
        </DishComponent>
    )
}

export default LayoutUser(Dish)
