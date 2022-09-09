import CalendarContainer from "@/components/Calendar/calendarContainer"
import Dish from "@/components/Dish/dish"
import { WithLayout } from "@/containers/Layout-user/withLayout"

import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken"

const FoodDishItem = () => {
  return (
    <CalendarContainer>
      <Dish />
    </CalendarContainer>
  )
}

export default WithLayout(WithRefreshingToken(FoodDishItem))
