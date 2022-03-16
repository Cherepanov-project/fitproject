import { useRouter } from "next/router";
import CalendarContainer from "../../../common/CalendarContainer";
import HeadLinkBack from "../../../common/HeadLinkBack";
import { WorkoutUl, ListWorkoutName, ItemWorkoutDiv } from "./styledWorkout";
import { workoutDay, workoutDayType } from "../../../model/workout/wokout";
import { useState } from "react";
import ItemWorkout from "./ItemWorkout";

export default function () {
  const { asPath } = useRouter();
  const [arrWorkoutDay, setWorkoutDay] = useState<workoutDayType[]>(workoutDay);

  const menuClickShow = (id: number) => {
    const workoutMutation = arrWorkoutDay.map((item) => {
      return {
        ...item,
        activeMenu: item.id === id ? !item.activeMenu : false,
      };
    });
    setWorkoutDay(workoutMutation);
  };

  const workoutEllement = arrWorkoutDay.map((el: workoutDayType) => {
    return (
      <ItemWorkout
        key={el.id}
        workoutEl={el}
        asPath={asPath}
        menuClickShow={menuClickShow}
      />
    );
  });

  return (
    <CalendarContainer>
      <HeadLinkBack
        namesCompoent={"Ежедневный тренеровки"}
        backLink={"/calendar/"}
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
            <div></div>
          </ListWorkoutName>
          {workoutEllement}
        </WorkoutUl>
      </div>
    </CalendarContainer>
  );
}
