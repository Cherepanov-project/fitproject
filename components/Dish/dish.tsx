import { useState } from "react"
import { useRouter } from "next/router"

import img from "/common/images/DishChikenImg.png"
import generateId from "../../utils/generateId"
import { IFoodItemType, dishFood } from "../../models/dish/dish"
import DishIngredients from "./dishIngredients"
import { LayoutUser } from "../../containers/Layout-user/layoutUser"
import HeadLinkBack from "../headLinkBack"
import {
    DishComponent,
    DishItem,
    NutritionalItem,
    NutritionalContainer,
    IngredientsContainer,
    FoodContainer,
    ButtonFood,
    DishDescriptionWrapper,
} from "./dish.styles"

const Dish = () => {
    const { query } = useRouter()
    const [foodItem, setFoodItem] = useState<IFoodItemType>(dishFood)

    const ingredientsActive = () => {
        const activeIngredientsMutant = {
            ...foodItem,
            activeIngredients: !foodItem.activeIngredients,
        }
        setFoodItem(activeIngredientsMutant)
    }

    const recipeClickActive = () => {
        const activeIngredientsMutant = {
            ...foodItem,
            activeRecipe: !foodItem.activeRecipe,
        }
        setFoodItem(activeIngredientsMutant)
    }

    const favouritesAdd = () => {
        // Заглушка для будущего пока нету бэка
    }

    const itemNutritionalValue = foodItem.nutritionValue.map(el => {
        return (
            <NutritionalItem key={generateId()}>
                <div>{el.value}</div>
                <div>{el.nutrition}</div>
                <div>{el.units}</div>
            </NutritionalItem>
        )
    })

    return (
        <DishComponent imgUrl={img.src}>
            <HeadLinkBack
                backLink={`${query.url}`}
                namesComponent={query.eating}
            />
            <DishItem>
                <DishDescriptionWrapper>
                    <h2>{foodItem.namesFood}</h2>
                    <p>{foodItem.description}</p>
                    <ButtonFood
                        $display={foodItem.activeRecipe}
                        onClick={recipeClickActive}
                    >
                        Закрыть
                    </ButtonFood>
                </DishDescriptionWrapper>
                <FoodContainer $display={foodItem.activeRecipe}>
                    <h3>Ingredients</h3>
                    <IngredientsContainer>
                        <DishIngredients foodItem={foodItem} />
                    </IngredientsContainer>
                    <ButtonFood onClick={ingredientsActive}>
                        Просмотреть все ингредиенты
                    </ButtonFood>
                </FoodContainer>
                <FoodContainer $display={foodItem.activeRecipe}>
                    <h3>Пищевая ценность</h3>
                    <NutritionalContainer>
                        {itemNutritionalValue}
                    </NutritionalContainer>
                    <div>
                        <ButtonFood onClick={recipeClickActive}>
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
