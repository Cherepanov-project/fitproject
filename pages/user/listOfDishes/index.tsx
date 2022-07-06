import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"

import MenuItem from "../../../components/ListOfDishes/menuItem"
import SideBar from "../../../components/ListOfDishes/sideBar"
import { dishFoodAll } from "../../../models/dish/dish"
import { MenuWrapper, AllMenusWrapper, ListDishes } from "../../../components/ListOfDishes/listOfDishes.styles"
import { IFoodItemType } from "../../../models/dish/dish"
import { LayoutUser } from "../../../containers/Layout-user/layoutUser"

const AllMenus = () => {
    const elems = dishFoodAll.map((item: IFoodItemType) => (
        <MenuItem
            key={Math.random()}
            namesFood={item.namesFood}
            nutritionalValue={item.nutritionValue}
            star={item.star}
            id={item.id}
        />
    ))

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
    )
}

export default LayoutUser(AllMenus)
