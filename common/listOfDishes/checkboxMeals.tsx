import { useState } from 'react';
import { SideBarCheckBoxMeals } from '../../model/sideBar/sideBar';
import { MenuH2 } from '../../pages/user/listOfDishes/stylesAllMenus';
import {
  Specification,
  SpecificationSpan,
  BoxCheckBox,
} from '../../pages/user/listOfDishes/stylesAllMenus';
import Checkbox from '@mui/material/Checkbox';

const CheckboxMeals = () => {
  const initialValuesCheckBoxMeals: SideBarCheckBoxMeals = {
    Breakfast: true,
    Snack: true,
    Lunch: true,
    Dinner: true,
  };

  const [checkboxsMeals, setCheckboxsMeals] = useState<SideBarCheckBoxMeals>(
    initialValuesCheckBoxMeals
  );

  const setArgumentMeals = function (amt: string) {
    const newState = { ...checkboxsMeals };
    newState[amt] = !newState[amt];
    setCheckboxsMeals(newState);
  };

  const specificationMeals = ['Breakfast', 'Snack', 'Lunch', 'Dinner'];

  const MealsNods = specificationMeals.map((item: any) => (
    <BoxCheckBox key={Math.random()}>
      <Checkbox
        onClick={() => setArgumentMeals(item)}
        checked={checkboxsMeals[item]}
      />
      {item}
    </BoxCheckBox>
  ));

  return (
    <div>
      <MenuH2>Meals</MenuH2>
      {MealsNods}
    </div>
  );
};
export default CheckboxMeals;
