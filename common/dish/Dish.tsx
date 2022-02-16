import { useState, useMemo } from "react";
import {
  DishComponent,
  DishItem,
  NutritionalItem,
  NutritionalContainer,
  IndigrientsContainer,
  IndigrientItem,
  IndigrientItemImg,
  IndigrientItemText,
  FoodContainer,
  ButtonFood,
} from "./stylesDish";
import img from "/common/images/DishChikenImg.jpg";
import uid from "../../utils/uid";
import chickenFood from "/common/images/chickenFood.svg";
import { FoodItemType, dishFood } from "../../model/dish/dish";

const Dish = () => {
  const [foodItem, setFoodItem] = useState<FoodItemType>(dishFood);

  const indigrientsActive = () => {
    setFoodItem((prev) => ({
      ...prev,
      activeIndigrients: !prev.activeIndigrients,
    }));
  };

  const recipiClickActive = () => {
    setFoodItem((prev) => ({ ...prev, activeRecipe: !prev.activeRecipe }));
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

  const itemIndigrientsContainer = useMemo(() => {
    const viewIndigrients = 4;
    const foodIndigrients = foodItem.activeIndigrients
      ? foodItem.indigrients.slice(0, viewIndigrients)
      : foodItem.indigrients;
    return foodIndigrients.map((el) => {
      return (
        <IndigrientItem key={uid()}>
          <IndigrientItemImg imgUrl={chickenFood.src}></IndigrientItemImg>
          <IndigrientItemText>
            <div>{el.indigrient}</div>
            <div>{el.quantity}</div>
          </IndigrientItemText>
        </IndigrientItem>
      );
    });
  }, [foodItem.activeIndigrients]);

  return (
    <DishComponent imgUrl={img.src}>
      <DishItem>
        <div id="text-name">
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
            {itemIndigrientsContainer}
          </IndigrientsContainer>
          <ButtonFood onClick={indigrientsActive}>
            Просмотреть все ингредиенты
          </ButtonFood>
        </FoodContainer>
        <FoodContainer $display={foodItem.activeRecipe}>
          <h3>Пищевая ценность</h3>
          <NutritionalContainer>{itemNutritionalValue}</NutritionalContainer>
          <div id="butt">
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
