import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import { useQuery } from "react-query"
import { getWorkoutById, getWorkoutList } from "@/API/workouts"

import Slider from "@/components/Slider/slider"
import { LayoutUser } from "@/containers/Layout-user/layoutUser"
import muscleImg from "@/common/images/icons/backMuscle.svg"
import generateId from "@/utils/generateId"
import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken"
import { EXERCISE_CACHE_TIME } from "@/constants/time"
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
} from "@/components/WorkoutList/workout.styles"
import * as styles from "./el.styles"

import { useRef } from "react"

const WorkoutItem = () => {
  const path = useRouter()

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
        .filter(el => el.area === data?.data.area)
        .map(item => (
          <Link
            href={`/user/workoutList/workout/${item.id}`}
            key={item.id}
            passHref
          >
            <a>
              <CardExercise data={item} styles={styles} />
            </a>
          </Link>
        ))
    : null

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
