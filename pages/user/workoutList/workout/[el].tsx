import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Card from "@mui/material/Card"
import { LayoutUser } from "../../../../layouts/Layout-user/Layout-user"
import { exerciseList, exercisesType } from "../../../../model/workout/workout"
import img from "../../../../common/images/workoutExercise.svg"
import muscleImg from "../../../../common/images/icons/backMuscle.svg"
import uid from "../../../../utils/uid"
import useMediaQuery from "@mui/material/useMediaQuery"

import {
    MainWrapper,
    Container,
    LeftContent,
    Exercise,
    ExerciseTitle,
    ExerciseDescription,
    Image,
    MusclesTitle,
    MusclesList,
    Muscle,
    BottomContainer,
    ImgWrapper,
    TextWrapper,
    Reps,
} from "./workoutStyles"

const WorkoutItem = () => {
    const path = useRouter()
    const [workoutList, setWorkoutList] =
        useState<exercisesType[]>(exerciseList)
    const workout = workoutList.find(el => el.id === Number(path.query.el))
    const matches = useMediaQuery("(min-width:2000px")

    const cardStyles = {
        width: !matches ? 184 : 234,
        height: !matches ? 186 : 226,
        backgroundColor: "#F0F7FF",
        margin: "30px 30px 30px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        cursor: "pointer",
    }

    const musclesList = workout?.muscles.map(muscle => (
        <Muscle key={uid()}>
            <img src={muscleImg.src} />
            <span>{muscle}</span>
        </Muscle>
    ))

    const exercises = exerciseList
        .filter(el => el.area === workout?.area)
        .map(item => (
            <Link href={`/user/workoutList/workout/${item.id}`} key={item.id}>
                <Card sx={cardStyles}>
                    <div>
                        <ImgWrapper src={img.src} alt="workout exercise" />
                    </div>
                    <TextWrapper>
                        <Exercise>{item.name}</Exercise>
                        <Reps>{`${item.move} X ${item.repeat} REPS`}</Reps>
                    </TextWrapper>
                </Card>
            </Link>
        ))

    return (
        <MainWrapper>
            <Container>
                <LeftContent>
                    <Exercise>
                        <ExerciseTitle>{workout?.name}</ExerciseTitle>
                        <ExerciseDescription>
                            {workout?.exercise}
                        </ExerciseDescription>

                        <MusclesTitle>Muscles</MusclesTitle>
                        <MusclesList>{musclesList}</MusclesList>
                    </Exercise>
                    <Image src={img.src} />
                </LeftContent>
            </Container>
            <BottomContainer>{exercises}</BottomContainer>
        </MainWrapper>
    )
}

export default LayoutUser(WorkoutItem)
