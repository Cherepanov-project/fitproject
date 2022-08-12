import { useState, useEffect, useMemo } from "react"
import { useQuery, useQueryClient } from "react-query"
import Link from "next/link"
import Box from "@mui/material/Box"
import CardExercise from "@/components/WorkoutList/CardExercise/CardExercise"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"

import { getWorkoutList } from "@/API/workouts"
import { filterExerciseList } from "@/utils/filterExercises"
import { EXERCISE_CACHE_TIME } from "@/constants/time"
import { IMuscles } from "./itemList.interface"
import { LayoutItemList } from "./itemList.styles"
import { StyledAnchorExercise } from "../workoutList.styles"
import { getCardsPerPage } from "@/utils/getCardsPerPage"
import generateId from "@/utils/generateId"
import { StyledAnchorDish } from "@/components/ListOfDishes/listOfDishes.styles"
import CardDish from "@/components/ListOfDishes/CardDish/CardDish"

const ItemList = ({ muscles }: IMuscles) => {
  let [cardsAmount, setCardsAmount] = useState(getCardsPerPage)
  let filteredExercises: any[] = useMemo(() => [], [])
  const { data, isSuccess } = useQuery("workouts", getWorkoutList, {
    staleTime: EXERCISE_CACHE_TIME,
  })

  const [minResOnPage, setMinResOnPage] = useState(0)
  const [maxResOnPage, setMaxResOnPage] = useState(cardsAmount)

  const queryClient = useQueryClient()

  const changePage = page => {
    if (!page) {
      return
    }
    setMinResOnPage(() => (page - 1) * cardsAmount)
    setMaxResOnPage(() => page * cardsAmount)
    setCurrentPage(page)
  }

  const [countPages, setCountPages] = useState(
    Math.ceil(filteredExercises.length / cardsAmount)
  )
  const [currentPage, setCurrentPage] = useState(1)

  if (isSuccess) {
    filteredExercises = filterExerciseList(muscles, data)
  }

  useEffect(() => {
    queryClient.prefetchQuery("workouts", getWorkoutList)
  }, [queryClient])

  useEffect(() => {
    setCountPages(Math.ceil(filteredExercises.length / cardsAmount))
  }, [filteredExercises])

  useEffect(() => {
    if (countPages < currentPage) {
      changePage(countPages)
    }
  }, [countPages, currentPage])

  useEffect(() => {
    function handleWindowResize() {
      setCardsAmount(getCardsPerPage())
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  useEffect(() => {
    setCountPages(Math.ceil(filteredExercises.length / cardsAmount))
    setMinResOnPage(() => (currentPage - 1) * cardsAmount)
    setMaxResOnPage(() => currentPage * cardsAmount)
  }, [cardsAmount])

  const exercises = []

  for (let i = minResOnPage; i < maxResOnPage; i++) {
    if (filteredExercises[i]) {
      exercises.push(
        <Link
          href={`/user/listOfDishes/dish/${filteredExercises[i].id}`}
          passHref
          key={generateId()}
        >
          <StyledAnchorExercise>
            <CardExercise data={filteredExercises[i]} />
          </StyledAnchorExercise>
        </Link>
      )
    }
  }

  return (
    <>
      <LayoutItemList>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            paddingTop: "90px",
            margin: "0 12px",
          }}
        >
          {exercises}
        </Box>
        {countPages > 0 && (
          <Stack
            spacing={2}
            sx={{
              margin: "60px 0 0 0",
            }}
          >
            <Pagination
              defaultPage={1}
              count={countPages}
              onChange={(event, value) => changePage(value)}
              page={currentPage}
              shape="rounded"
              variant="outlined"
              color="secondary"
              sx={{
                backgroundColor: "#ffffff",
                position: "absolute",
                right: "54px",
                bottom: "13px",
              }}
            />
          </Stack>
        )}
      </LayoutItemList>
    </>
  )
}

export default ItemList
