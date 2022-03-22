import { useState } from 'react';
import {
  initialValuesCheckBoxMeals,
  SideBarCheckBoxMeals,
  specificationMealsType,
  specificationMeals,
} from '../../model/sideBar/sideBar';
import { MenuH2 } from '../../pages/user/listOfDishes/stylesAllMenus';
import { BoxCheckBox } from '../../pages/user/listOfDishes/stylesAllMenus';
import Checkbox from '@mui/material/Checkbox';

const CheckboxMeals = () => {
  const [checkboxsMeals, setCheckboxsMeals] = useState<SideBarCheckBoxMeals>(
    initialValuesCheckBoxMeals
  );

  const setArgumentMeals = function (amt: string) {
    const newState = { ...checkboxsMeals };
    newState[amt] = !newState[amt];
    setCheckboxsMeals(newState);
  };

  const MealsNods = specificationMeals.map((item: specificationMealsType) => (
    <BoxCheckBox key={item.id}>
      <Checkbox
        onClick={() => setArgumentMeals(item.name)}
        checked={checkboxsMeals[item.name]}
      />
      {item.name}
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
