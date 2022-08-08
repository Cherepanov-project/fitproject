import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useQuery } from "react-query"

import CircularProgress from "@mui/material/CircularProgress"

import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import { getWorkoutById } from "@/API/workouts"
import { StyleContentList } from "@/styles/admin/overview/overview.styles"
import { StyleLoaderContainer } from "@/styles/admin/recipes/recipes.styles"

import WorkoutItem from "@/components/WorkoutItem/workoutItem"

const WorkoutPage = () => {
    const router = useRouter()
    const [dataItem, setDataItem] = useState()
    const { data, isLoading, error, refetch } = useQuery(["workoutById", router.query.id], () => getWorkoutById(Number(router.query.id)), {
        enabled: false,
        onSuccess: (data) => {
            setDataItem(data.data)
        },
      })

      useEffect(() => {
        if (router.isReady && router.query.data !== undefined) {
            setDataItem(JSON.parse(router.query.data as string))
        } else if (router.isReady && !router.query.data) {
            refetch()
        }
      }, [router.isReady]);
     
    if (error instanceof Error) {
        return <h1>{error.message}</h1>
    }
    if (isLoading) {
        return (
            <StyleLoaderContainer>
                <CircularProgress></CircularProgress>
            </StyleLoaderContainer>
        )
    }

    return (
        <StyleContentList>
            {dataItem !== undefined ? (
                <WorkoutItem
                    dataItem={dataItem}
                    status={"HIGH"}
                ></WorkoutItem>
            ) : null}
        </StyleContentList>
    )
}

export default withLayout(WorkoutPage)
