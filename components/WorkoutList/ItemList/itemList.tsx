import { useState } from "react"
import { useQuery } from "react-query"
import Link from "next/link"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import useMediaQuery from "@mui/material/useMediaQuery"

import { ImgWrapper, TextWrapper, Exercise, Reps } from "./itemList.styles"
import { fetchWorkouts } from "../../../services/API/workouts"
import { filterExerciseList } from "../../../utils/filterExercises"
import { IMuscles } from "./itemList.interface"

const ItemList = ({ muscles }: IMuscles) => {
    let filteredExercises = []
    const queryWorkouts = useQuery("workouts", fetchWorkouts)
    const [minResOnPage, setMinResOnPage] = useState(0)
    const [maxResOnPage, setMaxResOnPage] = useState(6)
    const matches = useMediaQuery("(min-width:2000px")
    const cardStyles = {
        width: !matches ? 220 : 320,
        height: !matches ? 202 : 302,
        backgroundColor: "#F0F7FF",
        margin: "36px 8px 0 8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        cursor: "pointer",
    }
    const changePage = page => {
        setMinResOnPage(() => (page - 1) * 6)
        setMaxResOnPage(() => page * 6)
    }

    if (queryWorkouts.isSuccess) {
        filterExerciseList(filteredExercises, muscles, queryWorkouts.data.data.data)
        console.log(queryWorkouts.data.data.data)
    }
    const exercises = filteredExercises.map((item, index) => {
        if (index >= minResOnPage && index < maxResOnPage) {
            return (
                <Link
                    href={`/user/workoutList/workout/${item.id}`}
                    key={item.id}
                >
                    <Card sx={cardStyles}>
                        <div>
                            <ImgWrapper
                                imgUrl={item.img}
                                imgWidth={item.imgWidth}
                                imgHeight={item.imgHeight}
                            />
                        </div>
                        <TextWrapper>
                            <Exercise>{item.name}</Exercise>
                            <Reps>{`${item.move} X ${item.repeat} REPS`}</Reps>
                        </TextWrapper>
                    </Card>
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
                }}
            >
                {exercises}
            </Box>
            <Stack spacing={2} sx={{ margin: "10px 0 13px 0" }}>
                <Pagination
                    defaultPage={1}
                    count={5}
                    onChange={(event, value) => changePage(value)}
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginRight: "30px",
                        position: "absolute",
                    }}
                />
            </Stack>
        </>
    )
}

export default ItemList
