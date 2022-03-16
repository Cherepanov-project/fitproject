import { useRouter } from "next/router";
import CalendarContainer from "../../../common/CalendarContainer";
import HeadLinkBack from "../../../common/HeadLinkBack";
import Exercises from "../../../common/exercises/Exercises";

const WorkoutExercises = () => {
  const { query } = useRouter();
  return (
    <CalendarContainer>
      <HeadLinkBack backLink={`${query.url}`} namesCompoent={query.eating} />
      <Exercises />
    </CalendarContainer>
  );
};

export default WorkoutExercises;
