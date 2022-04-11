import { useRouter } from "next/router";
import CalendarContainer from "../../../../common/CalendarContainer";
import HeadLinkBack from "../../../../common/HeadLinkBack";
import Exercises from "../../../../common/exercises/Exercises";
import {LayoutUser} from "../../../../layouts/Layout-user/Layout-user";

const WorkoutExercises = () => {
  const { query } = useRouter();
  return (
    <CalendarContainer>
      <HeadLinkBack backLink={`${query.url}`} namesCompoent={query.eating} />
      <Exercises />
    </CalendarContainer>
  );
};

export default LayoutUser(WorkoutExercises);
