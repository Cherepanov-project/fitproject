import { useRouter } from "next/router"

import CalendarContainer from "@/components/Calendar/calendarContainer"
import HeadLinkBack from "@/components/HeadLinkBack/headLinkBack"
import Exercises from "@/components/Exercises/exercises"
import { WithLayout } from "@/containers/Layout-user/withLayout"

const WorkoutExercises = () => {
  const { query } = useRouter()
  return (
    <CalendarContainer>
      <HeadLinkBack backLink={`${query.url}`} namesComponent={query.eating} />
      <Exercises />
    </CalendarContainer>
  )
}

export default WithLayout(WorkoutExercises)
