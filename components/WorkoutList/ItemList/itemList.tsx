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

const ItemList = ({ muscles }: IMuscles) => {
    let filteredExercises: any[] = useMemo(() => [], [])
    const { data, isSuccess } = useQuery("workouts", getWorkoutList, { 
        staleTime: EXERCISE_CACHE_TIME, 
    })
  
    const [minResOnPage, setMinResOnPage] = useState(0)
    const [maxResOnPage, setMaxResOnPage] = useState(6)

    const queryClient = useQueryClient();

    const changePage = page => {
        if (!page) {
            return
        }
        setMinResOnPage(() => (page - 1) * 6)
        setMaxResOnPage(() => page * 6)
        setCurrentPage(page)
    }

    const [countPages, setCountPages] = useState(Math.ceil(filteredExercises.length / 6))
    const [currentPage, setCurrentPage] = useState(1)
  
  if (isSuccess) {
         filteredExercises = filterExerciseList(muscles, data)
    }

    useEffect(() => { 
      queryClient.prefetchQuery("workouts", getWorkoutList)
    }, [queryClient])
  
    useEffect(() => {
      setCountPages(Math.ceil(filteredExercises.length / 6))
    }, [filteredExercises])
  
    useEffect(() => {
      if (countPages < currentPage) {
          changePage(countPages)
        }
    }, [countPages, currentPage])
  
    const exercises = filteredExercises.map((item, index) => {
      if (index >= minResOnPage && index < maxResOnPage) {
        return (
          <Link
            href={`/user/workoutList/workout/${item.id}`}
            key={item.id}
            passHref
          >
            <a style={{ textDecoration: "none" }}>
              <CardExercise data={item} />
            </a>
          </Link>
        )
      }
    })
  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          paddingTop: "35px",
        }}
      >
        {exercises}
      </Box>
      <Stack spacing={2} sx={{ margin: "70px 0 0 0", position: "relative" }}>
        {countPages > 0 && (
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
              right: "34px",
              bottom: "13px"
            }}
          />
        )}
      </Stack>
    </>
  )
}

export default ItemList
