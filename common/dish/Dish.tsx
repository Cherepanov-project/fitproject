import { useState } from "react";
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

const Dish = () => {
  const [foodItem, setFoodItem] = useState({
    namesFood: "Chicken Steak",
    activeRecipe: true,
    description:
      "Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. ",
    indigrients: [
      { indigrient: "chiken", quantity: 1, active: true },
      { indigrient: "chiken", quantity: 1, active: true },
      { indigrient: "chiken", quantity: 1, active: true },
      { indigrient: "chiken", quantity: 1, active: true },
      { indigrient: "chiken", quantity: 1, active: false },
    ],
    nutritionalValue: [
      { nutritiona: "Calories", value: 350, units: "Kcal" },
      { nutritiona: "Protein", value: 15, units: "g" },
      { nutritiona: "Fats", value: 25, units: "g" },
      { nutritiona: "Carbs", value: 90, units: "g" },
    ],
  });

  const IndigrientsActive = () => {
    setFoodItem((prev) => {
      if (prev.indigrients.find((el) => el.active === false)) {
        return {
          ...prev,
          indigrients: prev.indigrients.map((el) => ({
            ...el,
            active: true,
          })),
        };
      } else {
        const newIndigrient = prev.indigrients.map((el) => ({
          ...el,
          active: false,
        }));

        for (let i = 0; i < 4; i++) {
          const element = newIndigrient[i];
          element.active = true;
        }

        return {
          ...prev,
          indigrients: newIndigrient,
        };
      }
    });
  };

  const RecipiClickActive = () => {
    setFoodItem((prev) => ({ ...prev, activeRecipe: !prev.activeRecipe }));
  };

  const FavouritesAdd = () => {};

  const itemNutritionalValue = foodItem.nutritionalValue.map((el) => {
    return (
      <NutritionalItem key={uid()}>
        <div>{el.value}</div>
        <div>{el.nutritiona}</div>
        <div>{el.units}</div>
      </NutritionalItem>
    );
  });

  const itemIndigrientsContainer = foodItem.indigrients.map((el) => {
    return el.active ? (
      <IndigrientItem key={uid()}>
        <IndigrientItemImg imgUrl={chickenFood.src}></IndigrientItemImg>
        <IndigrientItemText>
          <div>{el.indigrient}</div>
          <div>{el.quantity}</div>
        </IndigrientItemText>
      </IndigrientItem>
    ) : null;
  });

  return (
    <DishComponent imgUrl={img.src}>
      <DishItem>
        <div id="text-name">
          <h2>{foodItem.namesFood}</h2>
          <p>{foodItem.description}</p>
          <ButtonFood
            $display={foodItem.activeRecipe}
            onClick={RecipiClickActive}
          >
            Закрыть
          </ButtonFood>
        </div>
        <FoodContainer $display={foodItem.activeRecipe}>
          <h3>Ingredients</h3>
          <IndigrientsContainer>
            {itemIndigrientsContainer}
          </IndigrientsContainer>
          <ButtonFood onClick={IndigrientsActive}>
            Просмотреть все ингредиенты
          </ButtonFood>
        </FoodContainer>
        <FoodContainer $display={foodItem.activeRecipe}>
          <h3>Пищевая ценность</h3>
          <NutritionalContainer>{itemNutritionalValue}</NutritionalContainer>
          <div id="butt">
            <ButtonFood onClick={RecipiClickActive}>Рецепт</ButtonFood>
            <ButtonFood onClick={FavouritesAdd}>
              Добавить в избранное
            </ButtonFood>
          </div>
        </FoodContainer>
      </DishItem>
    </DishComponent>
  );
};

export default Dish;
