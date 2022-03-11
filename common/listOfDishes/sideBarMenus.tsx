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

  return (
    <SideBarWrapper>
      <div>
        <MenuH2>Categories</MenuH2>
        <Specification>
          Salads <SpecificationSpan>320</SpecificationSpan>
        </Specification>
        <Specification>
          Meals with meat <SpecificationSpan>320</SpecificationSpan>
        </Specification>
        <Specification>
          Meals with chicken <SpecificationSpan>320</SpecificationSpan>
        </Specification>
        <Specification>
          Meals with seafood <SpecificationSpan>320</SpecificationSpan>
        </Specification>
      </div>
      <SideBarCheckBox>
        <MenuH2>Rating</MenuH2>
        <BoxCheckBox>
          <Checkbox
            defaultChecked
            onClick={() => setArgumentStar('FiveStar')}
          />
          <Rating name="read-only" value={5} />
        </BoxCheckBox>
        <BoxCheckBox>
          <Checkbox
            defaultChecked
            onClick={() => setArgumentStar('FourStar')}
          />
          <Rating name="read-only" value={4} />
        </BoxCheckBox>
        <BoxCheckBox>
          <Checkbox
            defaultChecked
            onClick={() => setArgumentStar('ThreeStar')}
          />
          <Rating name="read-only" value={3} />
        </BoxCheckBox>
        <BoxCheckBox>
          <Checkbox defaultChecked onClick={() => setArgumentStar('TwoStar')} />
          <Rating name="read-only" value={2} />
        </BoxCheckBox>
        <BoxCheckBox>
          <Checkbox defaultChecked onClick={() => setArgumentStar('OneStar')} />
          <Rating name="read-only" value={1} />
        </BoxCheckBox>
      </SideBarCheckBox>
      <div>
        <MenuH2>Meals</MenuH2>
        <BoxCheckBox>
          <Checkbox
            defaultChecked
            onClick={() => setArgumentMeals('Breakfast')}
          />
          Breakfast
        </BoxCheckBox>
        <BoxCheckBox>
          <Checkbox defaultChecked onClick={() => setArgumentMeals('Snack')} />
          Snacks
        </BoxCheckBox>
        <BoxCheckBox>
          <Checkbox defaultChecked onClick={() => setArgumentMeals('Lunch')} />
          Lunch
        </BoxCheckBox>
        <BoxCheckBox>
          <Checkbox defaultChecked onClick={() => setArgumentMeals('Dinner')} />
          Dinner
        </BoxCheckBox>
      </div>
    </SideBarWrapper>
  );
};
export default SideBar;
