import CalendarContainer from "@/components/Calendar/calendarContainer"
import Dish from "@/components/Dish/dish"
import { LayoutUser } from "@/containers/Layout-user/layoutUser"
import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken"

const FoodDishItem = () => {
  return (
    <CalendarContainer>
      <Dish />
    </CalendarContainer>
  )
}

export default WithRefreshingToken(LayoutUser(FoodDishItem))
