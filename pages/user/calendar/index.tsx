import {
  startOfMonth,
  getISODay,
  getMonth,
  getDaysInMonth,
  endOfMonth,
  addMonths,
  subMonths,
  getDate,
} from 'date-fns';
import {
  CalcHead,
  DayBlur,
  CalcLink,
  DietaLink,
  WorkoutLink,
  FlexItem,
  CalcDate,
  CalendarDiv,
} from './stylesCalendar';
import CalendarContainer from '../../../common/CalendarContainer';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import monthArr from '../../../model/user/main';
import uid from '../../../utils/uid';
import FramerCalendar from '../../../common/FramerCalendar';

import { LayoutUser } from '../../../layouts/Layout-user/Layout-user';

const Calendar = () => {
  const dateToday: Date = new Date();
  const startDay = startOfMonth(dateToday);
  const lastDay = endOfMonth(dateToday);
  const countDay = getDaysInMonth(dateToday);
  const dayWeekISO = getISODay(startDay);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    width: '7rem',
    height: '6rem',
    backgroundColor: 'azure',
    color: theme.palette.text.secondary,
  }));

  const matches = useMediaQuery('(min-width:2360px)');
  const matches2 = useMediaQuery('(min-width:2000px)');
  

  const arrDays = (data: Date): (number | null)[] => {
    const dayWeekISOend = getISODay(lastDay);
    const prevMonth = getDate(endOfMonth(subMonths(data, 1)));
    let nextMonth = getDate(addMonths(startDay, 1));
    const arr = Array.from({ length: countDay }, (v, i) => i + 1);
    for (let index = 1; index < dayWeekISO; index++) {
      arr.unshift(prevMonth - (index - 1));
    }
    for (let index = dayWeekISOend; index < 7; index++) {
      arr.push(nextMonth++);
    }
    return arr;
  };

  const size = matches ? {width: 145, height: 145} : matches2 ? {width: 140, height: 140} : {width: 100, height: 100}

  const weekElements = arrDays(dateToday).map((el, index) => {
    return index >= dayWeekISO - 1 && index < countDay + (dayWeekISO - 1) ? (
      <Grid item xs={1} key={uid()}>
        <Item sx={size}>
          <FlexItem>
            <CalcDate>{el}</CalcDate>
            <div>
              <WorkoutLink>
                <Link href={`calendar/workout/${el}`}>
                  <CalcLink>Тренировка</CalcLink>
                </Link>
              </WorkoutLink>
              <DietaLink>
                <Link href={`calendar/dieta/${el}`}>
                  <CalcLink>Диета</CalcLink>
                </Link>
              </DietaLink>
            </div>
          </FlexItem>
        </Item>
      </Grid>
    ) : (
      <Grid item xs={1} key={uid()}>
        <DayBlur>
          <Item sx={size}>
            <CalcDate>{el}</CalcDate>
          </Item>
        </DayBlur>
      </Grid>
    );
  });

  return (
    <CalendarContainer>
      <CalendarDiv>
        <CalcHead>{monthArr[getMonth(dateToday)]}</CalcHead>
        <Box sx={{ flexGrow: 1}}>
          <Grid container columns={8} rowSpacing={5}>
            {weekElements}
          </Grid>
        </Box>
      </CalendarDiv>
    </CalendarContainer>
  );
};

export default LayoutUser(FramerCalendar(Calendar))
