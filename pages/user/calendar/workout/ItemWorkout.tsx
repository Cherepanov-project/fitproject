import Link from "next/link"
import { FC } from "react"
import { workoutDayType } from "../../../../model/workout/wokout"
import {
    ListItem,
    ItemWorkoutDiv,
    ButtonMenu,
    ButtonDiv,
    DropMenu,
    WorkoutLink,
} from "./styledWorkout"

interface ItemWorkoutProps {
    workoutEl: workoutDayType
    asPath: string
    menuClickShow?: (id: number) => void
}

const ItemWorkout: FC<ItemWorkoutProps> = ({
    workoutEl,
    asPath,
    menuClickShow,
}) => {
    return (
        <ListItem>
            <ItemWorkoutDiv>
                <Link
                    href={{
                        pathname: `/user/calendar/workoutExercises/${workoutEl.exercises}`,
                        query: { url: asPath, eating: workoutEl.exercises },
                    }}
                    passHref
                >
                    <WorkoutLink>{workoutEl.name}</WorkoutLink>
                </Link>
            </ItemWorkoutDiv>
            <ItemWorkoutDiv color="#7B809A">
                {workoutEl.exercises}
            </ItemWorkoutDiv>
            <ItemWorkoutDiv color="#7B809A">{workoutEl.repeat}</ItemWorkoutDiv>
            <ButtonDiv>
                <ButtonMenu onClick={() => menuClickShow(workoutEl.id)}>
                    ...
                </ButtonMenu>
                <DropMenu $display={workoutEl.activeMenu}>Меню</DropMenu>
            </ButtonDiv>
        </ListItem>
    )
}

export default ItemWorkout
