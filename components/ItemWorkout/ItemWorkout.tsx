import React from "react"
import Link from "next/link"

import { IItemWorkoutProps } from "@/models/workout/workoutDay"
import {
    ListItem,
    ItemWorkoutDiv,
    ButtonMenu,
    ButtonDiv,
    DropMenu,
    WorkoutLink,
} from "./styledWorkout"

const ItemWorkout: React.FC<IItemWorkoutProps> = ({ workoutEl, asPath, menuClickShow }) => {
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
