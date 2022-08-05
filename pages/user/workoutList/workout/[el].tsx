import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import { useQuery } from "react-query"
import { getWorkoutById, getWorkoutList } from "@/API/workouts"

// components
import Slider from "@/components/Slider/slider"

// containers
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
  MuscleTitle,
} from "@/components/WorkoutList/workout.styles"
import * as styles from "@/components/WorkoutList/CardExercise/el.styles"

import { FontArimaMadurai } from "@/utils/fonts/fontStyles"

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
            <MuscleTitle>
              {muscle}
              <span>2 Piece</span>
            </MuscleTitle>
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

  // фейковые данные для тестирования
  if (data) {
   data.data.exercise =
     "Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken."
   data.data.img = "/fitproject/exercises/hands_up_on_socks.jpg"
   data.data.imgWidth=172
   data.data.imgHeight=266
  }
  ////////////////////////////////////

  return (
    <MainWrapper>
      <FontArimaMadurai />
      <Container>
        <LeftContent>
          <Exercise>
            <ExerciseTitle>{data?.data.name}</ExerciseTitle>
            <ExerciseDescription>{data?.data.exercise}</ExerciseDescription>
            <MusclesTitle>Muscles</MusclesTitle>
            <MusclesList>{musclesList}</MusclesList>
          </Exercise>
        </LeftContent>
        <ImageWorkout
          imgUrl={data?.data.img}
          imgWidth={data?.data.imgWidth}
          imgHeight={data?.data.imgHeight}
          src={data?.data.img}
          alt="alt-image"
        />
      </Container>
      <Slider>{exercises}</Slider>
    </MainWrapper>
  )
}

export default WithRefreshingToken(LayoutUser(WorkoutItem))
