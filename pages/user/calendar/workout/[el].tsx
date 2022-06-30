import { useRouter } from "next/router"
import { useState } from "react"

import CalendarContainer from "../../../../components/CalendarContainer"
import HeadLinkBack from "../../../../components/HeadLinkBack"
import ItemWorkout from "./ItemWorkout"
import { LayoutUser } from "../../../../containers/Layout-user/Layout-user"
import { WorkoutUl, ListWorkoutName, ItemWorkoutDiv } from "./styledWorkout"
import {
    workoutDay,
    IWorkoutDayType,
} from "../../../../models/workout/workoutDay"

LayoutUser(function () {
    const { asPath } = useRouter()
    const [arrWorkoutDay, setWorkoutDay] =
        useState<IWorkoutDayType[]>(workoutDay)

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
                backLink={"/User/calendar"}
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

export { LayoutUser }
