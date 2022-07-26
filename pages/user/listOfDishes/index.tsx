import { useState, useEffect, useCallback } from "react"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"

import MenuItem from "@/components/ListOfDishes/menuItem"
import SideBar from "@/components/ListOfDishes/sideBar"
import { dishFoodAll } from "@/models/dish/dish"
import {
  MenuWrapper,
  AllMenusWrapper,
  ListDishes,
} from "@/components/ListOfDishes/listOfDishes.styles"
import { IFoodItemType } from "@/models/models.interface"
import { LayoutUser } from "@/containers/Layout-user/layoutUser"
import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken"

import {
  ISideBarCheckBoxStar,
  initialValuesCheckBoxStar,
  specificationStar,
} from "@/models/sideBar/sideBar"

const AllMenus = () => {

  const [checkbox, setCheckbox] = useState<ISideBarCheckBoxStar>(
    initialValuesCheckBoxStar
  )

  const [dishFoodRating, setDishFoodRating] =
    useState<IFoodItemType[]>(dishFoodAll)

  const setArgumentStar = useCallback(
    (amt: string): void => {
      const newState = { ...checkbox }
      newState[amt] = !newState[amt]
      setCheckbox(newState)
    },
    [checkbox]
  )

  useEffect(() => {
    const foodRating: IFoodItemType[] = dishFoodAll.reduce((arr, food) => {
      specificationStar.forEach(star => {
        if (checkbox[star.name] && food.star === star.id) {
          arr.push(food)
        }
      })
      return arr
    }, [])
    foodRating.sort((a, b) => {
      if (a.star > b.star) {
        return -1
      }
      if (a.star == b.star) {
        return 0
      }
      if (a.star < b.star) {
        return 1
      }
    })
    setDishFoodRating(foodRating)
  }, [checkbox])

  const elems = dishFoodRating.map((item: IFoodItemType) => (
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
      <SideBar checkbox={checkbox} setArgumentStar={setArgumentStar} />
      <MenuWrapper>
        <ListDishes>{elems}</ListDishes>
        <Stack sx={{ margin: 1, marginLeft: 38 }}>
          <Pagination count={10} />
        </Stack>
      </MenuWrapper>
    </AllMenusWrapper>
  )
}

export default WithRefreshingToken(LayoutUser(AllMenus))
