import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"

// ui libs
import Card from "@mui/material/Card"
import useMediaQuery from "@mui/material/useMediaQuery"

// components
import Slider from "@/components/Slider/slider"

// containers
import { LayoutUser } from "@/containers/Layout-user/layoutUser"
import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken"

// models
import { exerciseList, exercisesType } from "@/models/workout/workout"

// images
import { muscleImg } from "@/common/images/icons"

// utils
import generateId from "@/utils/generateId"

// styles
import {
    MainWrapper,
    Container,
    LeftContent,
    Exercise,
    ExerciseTitle,
    ExerciseDescription,
    ImageWorkout,
    MusclesTitle,
    MusclesList,
    Muscle,
    BottomContainer,
    ImgWrapper,
    TextWrapper,
    Reps,
} from "@/components/WorkoutList/workout.styles"

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
        <Muscle key={generateId()}>
            <Image src={muscleImg.src} alt="muscle" />
            <span>{muscle}</span>
        </Muscle>
    ))
    const exercises = exerciseList
        .filter(el => el.area === workout?.area)
        .map(({ id, img, imgWidth, imgHeight, name, approachCount, repeatCount }) => (
            <Link href={`/user/workoutList/workout/${id}`} key={id} passHref>
                <Card sx={cardStyles}>
                    <ImgWrapper
                        imgUrl={img}
                        imgWidth={imgWidth}
                        imgHeight={imgHeight}
                    />
                    <TextWrapper>
                        <Exercise>{name}</Exercise>
                        <Reps>{`${approachCount} X ${repeatCount} REPS`}</Reps>
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
                            {/*{workout?.exercise}*/}
                        </ExerciseDescription>

                        <MusclesTitle>Muscles</MusclesTitle>
                        <MusclesList>{musclesList}</MusclesList>
                    </Exercise>
                    <div>
                        <ImageWorkout
                            imgUrl={workout?.img}
                            imgWidth={workout?.imgWidth}
                            imgHeight={workout?.imgHeight}
                            src={workout?.img}
                            alt="alt-image"
                        />
                    </div>
                </LeftContent>
            </Container>
            <Slider>{exercises}</Slider>
        </MainWrapper>
    )
}

export default WithRefreshingToken(LayoutUser(WorkoutItem))
