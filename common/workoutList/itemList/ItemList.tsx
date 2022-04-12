import Link from 'next/link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { exerciseList} from '../../../model/workout/workout';
import useMediaQuery  from '@mui/material/useMediaQuery';
import img from '../../images/workoutExercise.png'

import {
        ImgWrapper,
        TextWrapper,
        Exercise,
        Reps
} from './ItemListStyled';

const ItemList = () => {
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

    const exercises = exerciseList.map((item) => (
        <Link href={`/user/workoutList/workout/${item.id}`} key={item.id}>
        <Card sx={cardStyles}>
            <div><ImgWrapper src={img.src} alt='workout exercise'/></div>
                <TextWrapper>
                    <Exercise>{item.name}</Exercise>
                    <Reps>{`${item.move} X ${item.repeat} REPS`}</Reps>
            </TextWrapper>
        </Card>
        </Link>
    ))
    

return (
    <>
    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
        {exercises}
    </Box>
    <Stack spacing={2} sx={{margin: '10px 0 13px 0'}}>
      <Pagination count={10} sx={{display: 'flex', justifyContent: 'flex-end', marginRight: '30px'}}/>
    </Stack>
    </>
)
}

export default ItemList