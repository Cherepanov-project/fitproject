import MenuItem from '../../../common/listOfDishes/menuItem';
import { dishFoodAll } from '../../../model/dish/dish';
import SideBar from '../../../common/listOfDishes/sideBarMenus';
import { MenuWrapper, AllMenusWrapper, ListDishes } from './stylesAllMenus';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FoodItemType } from '../../../model/dish/dish';

export default function AllMenus() {
  const elems = dishFoodAll.map((item: FoodItemType) => (
    <MenuItem
      key={Math.random()}
      namesFood={item.namesFood}
      nutritionalValue={item.nutritionalValue}
      star={item.star}
      id={item.id}
    />
  ));

  return (
    <AllMenusWrapper>
      <SideBar />
      <MenuWrapper>
        <ListDishes>{elems}</ListDishes>
        <Stack sx={{ margin: 1, marginLeft: 38 }}>
          <Pagination count={10} />
        </Stack>
      </MenuWrapper>
    </AllMenusWrapper>
  );
}
