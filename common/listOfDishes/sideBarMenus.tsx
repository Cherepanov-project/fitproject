import {
  SideBarWrapper,
  SideBarCheckBox,
  BoxCheckBox,
  Specification,
  SpecificationSpan,
  MenuH2,
} from '../../pages/user/listOfDishes/stylesAllMenus';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';

const SideBar = ({
  setCheckbox,
  checkboxs,
  setCheckboxsMeals,
  checkboxsMeals,
}) => {
  const setArgumentStar = function (amt: string) {
    const newState = { ...checkboxs };
    newState[amt] = !newState[amt];
    setCheckbox(newState);
  };

  const setArgumentMeals = function (amt: string) {
    const newState = { ...checkboxsMeals };
    newState[amt] = !newState[amt];
    setCheckboxsMeals(newState);
  };

  const specificationItems = [
    { Salads: 320 },
    { 'Meals with meat': 320 },
    { 'Meals with chicken': 320 },
    { 'Meals with seafood': 320 },
  ];

  const specificationNods = specificationItems.map((item: any) => (
    <Specification key={Math.random()}>
      {Object.keys(item)[0]}
      <SpecificationSpan>{Object.values(item)[0]}</SpecificationSpan>
    </Specification>
  ));

  const specificationStar = [
    { FiveStar: 5 },
    { FourStar: 4 },
    { ThreeStar: 3 },
    { TwoStar: 2 },
    { OneStar: 1 },
  ];

  const StarsNods = specificationStar.map((item: any) => (
    <BoxCheckBox key={Math.random()}>
      <Checkbox
        defaultChecked
        onChange={() => setArgumentStar(Object.keys(item)[0])}
        checked={checkboxs[Object.keys(item)[0]]}
      />
      <Rating
        name="read-only"
        readOnly
        value={Number(Object.values(item)[0])}
      />
    </BoxCheckBox>
  ));

  const specificationMeals = ['Breakfast', 'Snack', 'Lunch', 'Dinner'];

  const MealsNods = specificationMeals.map((item: any) => (
    <BoxCheckBox key={Math.random()}>
      <Checkbox
        defaultChecked
        onClick={() => setArgumentMeals(item)}
        checked={checkboxsMeals[item]}
      />
      {item}
    </BoxCheckBox>
  ));
  return (
    <SideBarWrapper>
      <div>
        <MenuH2>Categories</MenuH2>
        {specificationNods}
      </div>
      <SideBarCheckBox>
        <MenuH2>Rating</MenuH2>
        {StarsNods}
      </SideBarCheckBox>
      <div>
        <MenuH2>Meals</MenuH2>
        {MealsNods}
      </div>
    </SideBarWrapper>
  );
};
export default SideBar;
