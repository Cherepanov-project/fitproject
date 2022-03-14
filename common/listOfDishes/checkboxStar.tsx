import Checkbox from '@mui/material/Checkbox';
import { BoxCheckBox } from '../../pages/user/listOfDishes/stylesAllMenus';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { SideBarCheckBoxStar } from '../../model/sideBar/sideBar';
import {
  SideBarCheckBox,
  MenuH2,
} from '../../pages/user/listOfDishes/stylesAllMenus';

const CheckboxStar = () => {
  const initialValuesCheckBoxStar: SideBarCheckBoxStar = {
    FiveStar: true,
    FourStar: true,
    ThreeStar: true,
    TwoStar: true,
    OneStar: true,
  };

  const setArgumentStar = function (amt: string) {
    const newState = { ...checkboxs };
    newState[amt] = !newState[amt];
    setCheckbox(newState);
  };

  const [checkboxs, setCheckbox] = useState<SideBarCheckBoxStar>(
    initialValuesCheckBoxStar
  );

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

  return (
    <SideBarCheckBox>
      <MenuH2>Rating</MenuH2>
      {StarsNods}
    </SideBarCheckBox>
  );
};

export default CheckboxStar;
