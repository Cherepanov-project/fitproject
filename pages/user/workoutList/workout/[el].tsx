//import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
//import useMediaQuery from "@mui/material/useMediaQuery"
import { useQuery } from "react-query"
import { getWorkoutById, getWorkoutList } from "@/API/workouts"

import Slider from "@/components/Slider/slider"
import { LayoutUser } from "@/containers/Layout-user/layoutUser"
import { exercisesType } from "@/models/workout/workout"
import muscleImg from "@/common/images/icons/backMuscle.svg"
import generateId from "@/utils/generateId"
import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken"
import { EXERCISE_CACHE_TIME } from "@/constants/time"
import { exerciseList } from "@/models/workout/workout"
import CardExercise from "@/components/WorkoutList/CardExercise/CardExercise"

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
  //BottomContainer,
  //ImgWrapper,
  //TextWrapper,
  //Reps,
} from "@/components/WorkoutList/workout.styles"
import * as styles from "./el.styles"

//import { ImgWrapper, TextWrapper, Exercise, Reps } from "@/components/WorkoutList/ItemList/itemList.styles"

import { useRef } from "react"

const WorkoutItem = () => {
  const path = useRouter()
  //const matches = useMediaQuery("(min-width:2000px")

  //const cardStyles = {
  //  width: !matches ? 184 : 234,
  //  height: !matches ? 186 : 226,
  //  backgroundColor: "#F0F7FF",
  //  margin: "30px 30px 30px 0",
  //  display: "flex",
  //  flexDirection: "column",
  //  justifyContent: "space-evenly",
  //  alignItems: "center",
  //  cursor: "pointer",
  //}

  /*
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
*/
  const data = null
  const isSuccess = false
  const workouts = {
    isSuccess: true,
    data: exerciseList,
  }

  //console.log(data)

  const musclesList = isSuccess
    ? data.data.muscleGroups.map((muscle: string) => {
        return (
          <Muscle key={generateId()}>
            <Image src={muscleImg.src} alt="muscle" width={50} height={50} />
            <span>{muscle}</span>
          </Muscle>
        )
      })
    : null

  const exercises = workouts?.isSuccess
    ? workouts.data
        //.filter(el => el.area === data?.data.area)
        .map(item => (
          <Link
            href={`/user/workoutList/workout/${item.id}`}
            key={item.id}
            passHref
          >
            <a style={{ textDecoration: "none" }}>
              <CardExercise data={item} styles={styles} />
            </a>
          </Link>
        ))
    : null

  //const containerRef = useRef(null)

  return (
    <MainWrapper>
      <Container>
        <LeftContent>
          <Exercise>
            <ExerciseTitle>{data?.data.name}</ExerciseTitle>
            <ExerciseDescription>{data?.data.exercise}</ExerciseDescription>

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
