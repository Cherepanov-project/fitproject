import { useState } from "react"
import { useRouter } from "next/router"

import img from "@/common/images/dishChickenImg.png"
import generateId from "@/utils/generateId"
import { IFoodItemType } from "@/models/models.interface"
import { dishFood } from "@/models/dish/dish"
import DishIngredients from "./dishIngredients"

import {
  DishComponent,
  DishItem,
  NutritionalItem,
  NutritionalContainer,
  IngredientsContainer,
  FoodContainer,
  ButtonFood,
  ButtonFoodTransparent,
  DishDescriptionWrapper,
  StyledHeaderContainer,
} from "./dish.styles"
import HeadLinkBack from "@/components/HeadLinkBack/headLinkBack"

const Dish = () => {
  const router = useRouter()
  const [foodItem, setFoodItem] = useState<IFoodItemType>(dishFood)

  const Header = router.asPath.includes("calendar") ? (
    <HeadLinkBack
      backLink={"/user/calendar/"}
      namesComponent={router.query.eating}
    />
  ) : null

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
        <p>
          {el.value}
          <p>{el.nutrition}</p>
        </p>
        <span>{el.units}</span>
      </NutritionalItem>
    )
  })

  return (
    <DishComponent imgUrl={img.src}>
      <StyledHeaderContainer>{Header}</StyledHeaderContainer>
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
            View all ingredients
          </ButtonFood>
        </FoodContainer>
        <FoodContainer $display={foodItem.activeRecipe}>
          <h3>Nutritional Values</h3>
          <NutritionalContainer>{itemNutritionalValue}</NutritionalContainer>
          <div>
            <ButtonFood onClick={recipeClickActive}>Recipe</ButtonFood>
            <ButtonFoodTransparent onClick={favouritesAdd}>
              Add to favorites
            </ButtonFoodTransparent>
          </div>
        </FoodContainer>
      </DishItem>
    </DishComponent>
  )
}

export default Dish
