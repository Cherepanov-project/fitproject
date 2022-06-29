import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Card from "@mui/material/Card"
import { LayoutUser } from "../../../../layouts/Layout-user/Layout-user"
import { exerciseList, exercisesType} from '../../../../model/workout/workout';
import muscleImg from '../../../../common/images/icons/backMuscle.svg'
import uid from '../../../../utils/uid';
import useMediaQuery  from '@mui/material/useMediaQuery';
import Slider from "../../../../common/slider/Slider"

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
        .map(({ id, img, imgWidth, imgHeight, name, move, repeat }) => (
            <Link href={`/user/workoutList/workout/${id}`} key={id}>
                <Card sx={cardStyles}>
                    <ImgWrapper
                        imgUrl={img}
                        imgWidth={imgWidth}
                        imgHeight={imgHeight}
                    />
                    <TextWrapper>
                        <Exercise>{name}</Exercise>
                        <Reps>{`${move} X ${repeat} REPS`}</Reps>
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
                    <div>
                        <Image
                            imgUrl={workout?.img}
                            imgWidth={workout?.imgWidth}
                            imgHeight={workout?.imgHeight}
                            src={workout?.img}
                        />
                    </div>
                </LeftContent>
            </Container>
            <Slider>{exercises}</Slider>
        </MainWrapper>
    )
}

export default LayoutUser(WorkoutItem)
