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
import CalendarContainer from '../../common/CalendarContainer';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import monthArr from '../../model/user/main';
import uid from '../../utils/uid';
import FramerCalendar from '../../common/FramerCalendar';

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

  const weekElements = arrDays(dateToday).map((el, index) => {
    console.log(el);
    return index >= dayWeekISO - 1 && index < countDay + (dayWeekISO - 1) ? (
      <Grid item xs={1} key={uid()}>
        <Item>
          <FlexItem>
            <CalcDate>{el}</CalcDate>
            <div>
              <WorkoutLink>
                <Link href={`/calendar/workout/${el}`}>
                  <CalcLink>Тренировка</CalcLink>
                </Link>
              </WorkoutLink>
              <DietaLink>
                <Link href={`/calendar/dieta/${el}`}>
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
          <Item>
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
        <Box sx={{ flexGrow: 1 }}>
          <Grid container columns={7} spacing={1}>
            {weekElements}
          </Grid>
        </Box>
      </CalendarDiv>
    </CalendarContainer>
  );
};

export default FramerCalendar(Calendar);
