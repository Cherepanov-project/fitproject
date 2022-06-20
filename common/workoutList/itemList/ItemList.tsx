import Link from 'next/link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useState} from "react";
import useMediaQuery  from '@mui/material/useMediaQuery';

import {exerciseList, muscleCheckboxListType} from '../../../model/workout/workout';
import img from '../../images/workoutExercise.svg'

import {
        ImgWrapper,
        TextWrapper,
        Exercise,
        Reps
} from './ItemListStyled';

interface IMuscles {
    muscles: {
        Arms: boolean;
        Breast: boolean;
        Chest: boolean;
        Legs: boolean;
    }
}

const ItemList = ({ muscles }: IMuscles) => {
    const [minResOnPage, setMinResOnPage] = useState(0)
    const [maxResOnPage, setMaxResOnPage] = useState(6)
    const matches = useMediaQuery('(min-width:2000px')
    const cardStyles = {
        width: !matches ? 220 : 320,
        height: !matches ? 202 : 302,
        backgroundColor: '#F0F7FF',
        margin: '36px 8px 0 8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        cursor: 'pointer'
    }
    const changePage = (page) => {
        setMinResOnPage(() => (page - 1) * 6)
        setMaxResOnPage(() => page * 6)
    }
    let filteredExercises = []
    const addOnArrResults = (list, partOfBody) => {
        filteredExercises = [...filteredExercises,
            ...list.filter(element => element.area === partOfBody)]
    }

    const filterExerciseList = (muscles, exerciseList) => {
        muscles.Arms ? addOnArrResults(exerciseList, 'Arms') : null
        muscles.Legs ? addOnArrResults(exerciseList, 'Legs') : null
        muscles.Chest ? addOnArrResults(exerciseList, 'Chest') : null
        muscles.Breast ? addOnArrResults(exerciseList, 'Breast') : null
    }
    filterExerciseList(muscles, exerciseList)

    const exercises = filteredExercises.map((item, index) => {
        if (index >= minResOnPage && index < maxResOnPage) {
            return (
                <Link href={`/user/workoutList/workout/${item.id}`} key={item.id}>
                    <Card sx={cardStyles}>
                        <div><ImgWrapper src={img.src} alt='workout exercise'/></div>
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
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
            }}>
                {exercises}
            </Box>
            <Stack spacing={2} sx={{margin: '10px 0 13px 0'}}>
              <Pagination
                  defaultPage={1}
                  count={5}
                  onChange={(e, value) => changePage(value)}
                  sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      marginRight: '30px',
                      position: 'absolute',
                    }}
              />
            </Stack>
        </>
    )
}

export default ItemList
