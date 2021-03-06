import { useState } from "react"
import { useRouter } from "next/router"

import CalendarContainer from "@/components/Calendar/calendarContainer"
import HeadLinkBack from "@/components/HeadLinkBack/headLinkBack"
import ItemWorkout from "@/components/ItemWorkout/ItemWorkout"
import { LayoutUser } from "@/containers/Layout-user/layoutUser"
import { WorkoutUl, ListWorkoutName, ItemWorkoutDiv } from "@/components/ItemWorkout/styledWorkout"
import { workoutDay, IWorkoutDayType } from "@/models/workout/workoutDay"

export default LayoutUser(function () {
  const { asPath } = useRouter()
  const [arrWorkoutDay, setWorkoutDay] = useState<IWorkoutDayType[]>(workoutDay)

  const menuClickShow = (id: number) => {
    const workoutMutation = arrWorkoutDay.map(item => {
      return {
        ...item,
        activeMenu: item.id === id ? !item.activeMenu : false,
      }
    })
    setWorkoutDay(workoutMutation)
  }

  const workoutElement = arrWorkoutDay.map((el: IWorkoutDayType) => {
    return (
      <ItemWorkout
        key={el.id}
        workoutEl={el}
        asPath={asPath}
        menuClickShow={menuClickShow}
      />
    )
  })

  return (
    <CalendarContainer>
      <HeadLinkBack
        namesComponent={"Ежедневные тренеровки"}
        backLink={"/user/calendar"}
      />
      <div>
        <WorkoutUl>
          <ListWorkoutName>
            <ItemWorkoutDiv color="#7B809A" fontSize="14px">
              Упражнение
            </ItemWorkoutDiv>
            <ItemWorkoutDiv color="#7B809A" fontSize="14px">
              Что то ещё
            </ItemWorkoutDiv>
            <ItemWorkoutDiv color="#7B809A" fontSize="14px">
              Подходы
            </ItemWorkoutDiv>
            <div />
          </ListWorkoutName>
          {workoutElement}
        </WorkoutUl>
      </div>
    </CalendarContainer>
  )
})

