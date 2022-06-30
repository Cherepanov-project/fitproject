import { useRouter } from "next/router"

import CalendarContainer from "../../../../components/calendarContainer"
import HeadLinkBack from "../../../../components/headLinkBack"
import Exercises from "../../../../components/Exercises/exercises"
import { LayoutUser } from "../../../../containers/Layout-user/layoutUser"

const WorkoutExercises = () => {
    const { query } = useRouter()
    return (
        <CalendarContainer>
            <HeadLinkBack
                backLink={`${query.url}`}
                namesComponent={query.eating}
            />
            <Exercises />
        </CalendarContainer>
    )
}

export default LayoutUser(WorkoutExercises)
