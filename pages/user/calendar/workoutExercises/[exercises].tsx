import { useRouter } from "next/router"
import CalendarContainer from "../../../../components/CalendarContainer"
import HeadLinkBack from "../../../../components/HeadLinkBack"
import Exercises from "../../../../components/Exercises/Exercises"
import { LayoutUser } from "../../../../containers/Layout-user/Layout-user"

const WorkoutExercises = () => {
    const { query } = useRouter()
    return (
        <CalendarContainer>
            <HeadLinkBack
                backLink={`${query.url}`}
                namesCompoent={query.eating}
            />
            <Exercises />
        </CalendarContainer>
    )
}

export default LayoutUser(WorkoutExercises)
