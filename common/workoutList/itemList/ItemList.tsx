import Link from 'next/link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { exerciseList} from '../../../model/workout/workout';
import useMediaQuery  from '@mui/material/useMediaQuery';


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

    const exercises = exerciseList.map(({id, img, name, move, repeat, imgWidth, imgHeight }) => (
        <Link href={`/user/workoutList/workout/${id}`} key={id}>
        <Card sx={cardStyles}>
            <ImgWrapper imgUrl={img} imgWidth={imgWidth} imgHeight={imgHeight}/>
                <TextWrapper>
                    <Exercise>{name}</Exercise>
                    <Reps>{`${move} X ${repeat} REPS`}</Reps>
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