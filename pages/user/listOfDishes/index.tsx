/* eslint-disable no-plusplus */
import { useState, useEffect, useCallback } from "react"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import Link from "next/link"

import CardDish from "@/components/ListOfDishes/CardDish/CardDish"

import SideBar from "@/components/ListOfDishes/sideBar"
import { dishFoodAll } from "@/models/dish/dish"
import {
  MenuWrapper,
  AllMenusWrapper,
  ListDishes,
  LayoutMenuWrapper,
  StyledAnchorDish,
} from "@/components/ListOfDishes/listOfDishes.styles"
import { IFoodItemType } from "@/models/models.interface"
import { LayoutUser } from "@/containers/Layout-user/layoutUser"
import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken"

import {
  ISideBarCheckBoxStar,
  initialValuesCheckBoxStar,
  specificationStar,
  initialValuesCheckBoxMeals,
  ISideBarCheckBoxMeals,
  specificationMeals,
} from "@/models/sideBar/sideBar"

import { FontPoppins, FontOpenSans } from "@/utils/fonts/fontStyles"
import { getDishesPerPage } from "@/utils/getDishesPerPage"
import generateId from "@/utils/generateId"
//import { relative } from "path"

// Апи для получения блюд пока нет.
// Все на фейковых данных "dishFoodAll".

const AllMenus = () => {
  let [dishesAmount, setDishesAmount] = useState(getDishesPerPage)
  const [checkbox, setCheckbox] = useState<ISideBarCheckBoxStar>(
    initialValuesCheckBoxStar
  )

  const [dishFood, setDishFood] = useState<IFoodItemType[]>(dishFoodAll)

  const setArgumentStar = useCallback(
    (amt: string): void => {
      const newState = { ...checkbox }
      newState[amt] = !newState[amt]
      setCheckbox(newState)
    },
    [checkbox]
  )

  const [checkboxMeals, setCheckboxMeals] = useState<ISideBarCheckBoxMeals>(
    initialValuesCheckBoxMeals
  )

  const setArgumentMeals = useCallback(
    (amt: string) => {
      const newState = { ...checkboxMeals }
      newState[amt] = !newState[amt]
      setCheckboxMeals(newState)
    },
    [checkboxMeals]
  )

  useEffect(() => {
    let foodFilter: IFoodItemType[] = dishFoodAll.reduce((arr, food) => {
      let flag = 0
      specificationMeals.forEach(meals => {
        if (checkboxMeals[meals.name] && food.id === meals.id) {
          flag++
        }
      })

      specificationStar.forEach(star => {
        if (checkbox[star.name] && food.star === star.id) {
          flag++
        }
      })

      if (flag === 2) {
        arr.push(food)
      }
      return arr
    }, [])

    foodFilter.sort((a, b) => {
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
    setDishFood(foodFilter)
  }, [checkbox, checkboxMeals])

  const [countPages, setCountPages] = useState(
    Math.ceil(dishFood.length / dishesAmount)
  )
  const [currentPage, setCurrentPage] = useState(1)
  const [minResOnPage, setMinResOnPage] = useState(0)
  const [maxResOnPage, setMaxResOnPage] = useState(dishesAmount)

  useEffect(() => {
    function handleWindowResize() {
      setDishesAmount(getDishesPerPage())
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  useEffect(() => {
    setCountPages(Math.ceil(dishFood.length / dishesAmount))
    setMinResOnPage(() => (currentPage - 1) * dishesAmount)
    setMaxResOnPage(() => currentPage * dishesAmount)
  }, [dishesAmount])

  const changePage = page => {
    if (!page) {
      return
    }
    setMinResOnPage(() => (page - 1) * dishesAmount)
    setMaxResOnPage(() => page * dishesAmount)
    setCurrentPage(page)
  }

  useEffect(() => {
    if (countPages < currentPage) {
      changePage(countPages)
    }
  }, [countPages, currentPage])

  useEffect(() => {
    setCountPages(Math.ceil(dishFood.length / dishesAmount))
  }, [dishFood])

  const formStringFromCheckedCheckboxes = () => {
    const allCheckboxes = { ...checkbox, ...checkboxMeals }
    let string = "?"
    for (const ch in allCheckboxes) {
      if (allCheckboxes[ch]) {
        string += `${ch}=true&`
      }
    }
    return string.substring(0, string.length - 1)
  }

  const elems = dishFood.map((item: IFoodItemType, index) => {
    if (index >= minResOnPage && index < maxResOnPage) {
      return (
        <Link
          as={`/user/listOfDishes/dish/${
            item.id
          }${formStringFromCheckedCheckboxes()}`}
          href={`/user/listOfDishes/dish/${item.id}`}
          passHref
          key={generateId()}
        >
          <StyledAnchorDish>
            <CardDish data={item} />
          </StyledAnchorDish>
        </Link>
      )
    }
  })

  return (
    <AllMenusWrapper>
      <FontPoppins />
      <FontOpenSans />
      <SideBar
        checkbox={checkbox}
        setArgumentStar={setArgumentStar}
        checkboxMeals={checkboxMeals}
        setArgumentMeals={setArgumentMeals}
      />
      <LayoutMenuWrapper>
        <MenuWrapper>
          <ListDishes>{elems}</ListDishes>
        </MenuWrapper>
        {countPages > 0 && (
          <Stack
            spacing={2}
            sx={{
              margin: "60px 0 0 0",
            }}
          >
            <Pagination
              defaultPage={1}
              count={countPages}
              onChange={(event, value) => changePage(value)}
              page={currentPage}
              shape="rounded"
              variant="outlined"
              color="secondary"
              sx={{
                backgroundColor: "#ffffff",
                position: "absolute",
                right: "34px",
                bottom: "13px",
              }}
            />
          </Stack>
        )}
      </LayoutMenuWrapper>
    </AllMenusWrapper>
  )
}

export default WithRefreshingToken(LayoutUser(AllMenus))
