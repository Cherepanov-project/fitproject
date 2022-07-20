//import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import Card from "@mui/material/Card"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useQuery } from "react-query"
import { getWorkoutById, getWorkoutList } from "@/API/workouts"

import Slider from "@/components/Slider/slider"
import { LayoutUser } from "@/containers/Layout-user/layoutUser"
import { exercisesType } from "@/models/workout/workout"
import muscleImg from "@/common/images/icons/backMuscle.svg"
import generateId from "@/utils/generateId"
import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken"
import { EXERCISE_CACHE_TIME } from "@/constants/time"
//import { filterExerciseList } from "@/utils/filterExercises"

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

    const { data, isSuccess } = useQuery(
      ["workouts", { id: path.query.el }],
        () => getWorkoutById(Number(path.query.el)),
        {
            staleTime: EXERCISE_CACHE_TIME,
        }
    )
    const workouts = useQuery("workouts", getWorkoutList, {
        staleTime: EXERCISE_CACHE_TIME,
    })

    console.log(data)

    const musclesList = isSuccess
        ? data.data.muscleGroups.map(muscle => {
              return (
                  <Muscle key={generateId()}>
                      <Image
                          src={muscleImg.src}
                          alt="muscle"
                          width={50}
                          height={50}
                      />
                      <span>{muscle}</span>
                  </Muscle>
              )
          })
        : null

    const exercises = workouts?.isSuccess
        ? workouts.data
              .filter(el => el.area === data?.data.area)
              .map(
                  ({
                      id,
                      img,
                      imgWidth,
                      imgHeight,
                      name,
                      approachCount,
                      repeatCount,
                  }) => (
                      <Link
                          href={`/user/workoutList/workout/${id}`}
                          key={id}
                          passHref
                      >
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
                  )
              )
        : null

    return (
        <MainWrapper>
            <Container>
                <LeftContent>
                    <Exercise>
                        <ExerciseTitle>{data?.data.name}</ExerciseTitle>
                        <ExerciseDescription>
                            {data?.data.exercise}
                        </ExerciseDescription>

                        <MusclesTitle>Muscles</MusclesTitle>
                        <MusclesList>{musclesList}</MusclesList>
                    </Exercise>
                    <div>
                        <ImageWorkout
                            imgUrl={data?.data.img}
                            imgWidth={data?.data.imgWidth}
                            imgHeight={data?.data.imgHeight}
                            src={data?.data.img}
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
