import { useState } from "react";
import {
  DishComponent,
  DishItem,
  NutritionalItem,
  NutritionalContainer,
  IndigrientsContainer,
  FoodContainer,
  ButtonFood,
} from "./stylesDish";
import img from "/common/images/DishChikenImg.jpg";
import uid from "../../utils/uid";
import { FoodItemType, dishFood } from "../../model/dish/dish";
import DishIndigrients from "./DishIndigrients";

const Dish = () => {
  const [foodItem, setFoodItem] = useState<FoodItemType>(dishFood);

  const indigrientsActive = () => {
    const activeIndigrientsMutan = {
      ...foodItem,
      activeIndigrients: !foodItem.activeIndigrients,
    };
    setFoodItem(activeIndigrientsMutan);
  };

  const recipiClickActive = () => {
    const activeRecipeMutan = {
      ...foodItem,
      activeRecipe: !foodItem.activeRecipe,
    };
    setFoodItem(activeRecipeMutan);
  };

  const favouritesAdd = () => {
    // Заглушка для будущего пока нету бэка
  };

  const itemNutritionalValue = foodItem.nutritionalValue.map((el) => {
    return (
      <NutritionalItem key={uid()}>
        <div>{el.value}</div>
        <div>{el.nutritiona}</div>
        <div>{el.units}</div>
      </NutritionalItem>
    );
  });

  return (
    <DishComponent imgUrl={img.src}>
      <DishItem>
        <div>
          <h2>{foodItem.namesFood}</h2>
          <p>{foodItem.description}</p>
          <ButtonFood
            $display={foodItem.activeRecipe}
            onClick={recipiClickActive}
          >
            Закрыть
          </ButtonFood>
        </div>
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
          <NutritionalContainer>{itemNutritionalValue}</NutritionalContainer>
          <div>
            <ButtonFood onClick={recipiClickActive}>Рецепт</ButtonFood>
            <ButtonFood onClick={favouritesAdd}>
              Добавить в избранное
            </ButtonFood>
          </div>
        </FoodContainer>
      </DishItem>
    </DishComponent>
  );
};

export default Dish;
