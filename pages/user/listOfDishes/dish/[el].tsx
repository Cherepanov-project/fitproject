import Link from "next/link"

import Dish from "@/components/Dish/dish"
import Slider from "@/components/Slider/slider"
import CardDish from "@/components/ListOfDishes/CardDish/CardDish"

import { LayoutUser } from "@/containers/Layout-user/layoutUser"
import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken"
import generateId from "@/utils/generateId"

import {
  StyledMainWrapper,
  StyledContainer,
} from "@/components/ListOfDishes/el.styles"

import * as styles from "@/components/ListOfDishes/CardDish/inline.styles"

import { dishFoodAll } from "@/models/dish/dish"
import { useRouter } from "next/router"
import { specificationStar } from "@/models/sideBar/sideBar"

const DishesItem = (): JSX.Element => {
  // пока нет апи используем фейковые данные dishFoodAll
  // в слайдере должен находиться список отфильтрованных карточек
  const { asPath } = useRouter()

  const urlQuery = asPath.split("?")[1]

  const filteredListDishes = dishFoodAll.filter(item => {
    const star = specificationStar.filter(s => s.id === item.star)[0]
    return urlQuery.includes(item.id) && urlQuery.includes(star.name)
  })

  const listDishes = filteredListDishes.map(item => (
    <Link
      href={`/user/listOfDishes/dish/${item.id}`}
      key={generateId()}
      passHref
    >
      <a>
        <CardDish data={item} styles={styles} />
      </a>
    </Link>
  ))

  return (
    <StyledMainWrapper>
      <StyledContainer>
        <Dish />
      </StyledContainer>
      <Slider flagDishes={true}>{listDishes}</Slider>
    </StyledMainWrapper>
  )
}

export default WithRefreshingToken(LayoutUser(DishesItem))
