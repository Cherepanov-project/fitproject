import MenuItem from '../../../common/listOfDishes/menuItem';
import { useState } from 'react';
import { dishFoodAll } from '../../../model/dish/dish';
import SideBar from '../../../common/listOfDishes/sideBarMenus';
import {
  SideBarCheckBoxStar,
  SideBarCheckBoxMeals,
} from '../../../model/sideBar/sideBar';
import { MenuWrapper, AllMenusWrapper, ListDishes } from './stylesAllMenus';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FoodItemType } from '../../../model/dish/dish';

export default function AllMenus() {
  const initialValuesCheckBoxStar: SideBarCheckBoxStar = {
    FiveStar: true,
    FourStar: true,
    ThreeStar: true,
    TwoStar: true,
    OneStar: true,
  };
  const [checkboxs, setCheckbox] = useState<SideBarCheckBoxStar>(
    initialValuesCheckBoxStar
  );

  const initialValuesCheckBoxMeals: SideBarCheckBoxMeals = {
    Breakfast: true,
    Snack: true,
    Lunch: true,
    Dinner: true,
  };

  const [checkboxsMeals, setCheckboxsMeals] = useState<SideBarCheckBoxMeals>(
    initialValuesCheckBoxMeals
  );

  const elems = dishFoodAll.map((item: FoodItemType) => (
    <MenuItem
      key={Math.random()}
      namesFood={item.namesFood}
      nutritionalValue={item.nutritionalValue}
      star={item.star}
      id={item.id}
    />
  ));

  const filterListOfDishes = (
    array: Array<any>,
    ArgumentMeals: SideBarCheckBoxMeals = checkboxsMeals
  ) => {
    let elemsFilter = [];
    Object.keys(ArgumentMeals).forEach((item) => {
      if (ArgumentMeals[item]) {
        elemsFilter.push(
          ...array.filter(
            (elem) =>
              (elem.props.id === item || elem.props.id.includes(item)) &&
              !elemsFilter.includes(elem)
          )
        );
      }
    });
    return elemsFilter;
  };

  const FilterStar = (
    Array: Array<any>,
    checkBoxes: SideBarCheckBoxStar = checkboxs
  ) => {
    if (Array === []) {
      return Array;
    }

    let elemsFilter = [];
    Array.forEach((item, i) => {
      if (Object.values(checkBoxes)[i]) {
        elemsFilter.push(
          ...Array.filter(
            (elem) => elem.props.star === 5 - i && !elemsFilter.includes(elem)
          )
        );
      }
    });

    return elemsFilter;
  };

  return (
    <AllMenusWrapper>
      <SideBar
        setCheckbox={setCheckbox}
        checkboxs={checkboxs}
        setCheckboxsMeals={setCheckboxsMeals}
        checkboxsMeals={checkboxsMeals}
      />
      <MenuWrapper>
        <ListDishes>{FilterStar(filterListOfDishes(elems))}</ListDishes>
        <Stack sx={{ margin: 1, marginLeft: 38 }}>
          <Pagination count={10} />
        </Stack>
      </MenuWrapper>
    </AllMenusWrapper>
  );
}
