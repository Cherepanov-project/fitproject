import Link from "next/link"
import {
  startOfMonth,
  getISODay,
  getDaysInMonth,
  endOfMonth,
  subMonths,
  getDate,
  format,
} from "date-fns"

import { motion } from "framer-motion"
import CalendarContainer from "@/components/Calendar/calendarContainer"
import generateId from "@/utils/generateId"
import { WithLayout } from "@/containers/Layout-user/withLayout"
import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken"
import {
  DayBlur,
  CalcLink,
  CalcDate,
  StyledCalendarButtons,
  StyledElementsContainer,
  StyledCalendarButton,
  StyledDayBox,
  StyledDayContent,
  StyledContentBox,
} from "@/components/Calendar/calendarContainer.styles"
import { useState } from "react"

const Calendar = () => {
  const [dateToday, setDateToday] = useState(new Date())
  const startDay = startOfMonth(dateToday)
  let lastDay = endOfMonth(dateToday)
  const countDay = getDaysInMonth(dateToday)
  const dayWeekISO = getISODay(startDay)

  const arrDays = (data: Date): (number | null)[] => {
    const dayWeekISOEnd = getISODay(lastDay)
    const prevMonth = getDate(endOfMonth(subMonths(data, 1)))
    const arr = Array.from({ length: countDay }, (value, index) => index + 1)
    for (let index = 1; index < dayWeekISO; index++) {
      arr.unshift(prevMonth - (index - 1))
    }
    for (let index = dayWeekISOEnd; index < 7; index++) {
      lastDay = new Date(lastDay.setDate(lastDay.getDate() + 1))
      let nextDayNextMonth = lastDay.getDate()
      arr.push(nextDayNextMonth)
    }
    return arr
  }

  const switchBetweenMonthHandle = (op: string) => {
    const operations = {
      plus: (a: number, b: number) => a + b,
      minus: (a: number, b: number) => a - b,
    }
    const newDateToday = new Date(
      dateToday.setMonth(operations[op](dateToday.getMonth(), 1))
    )
    setDateToday(newDateToday)
  }

  const weekElements = arrDays(dateToday).map((el, index) => {
    return index >= dayWeekISO - 1 && index < countDay + (dayWeekISO - 1) ? (
      <StyledDayBox key={generateId()}>
        <CalcDate>{el.toString().length !== 1 ? el : `0${el}`}</CalcDate>
        {el % 5 === 0 || el % 12 === 0 ? (
          <StyledDayContent>
            <StyledContentBox bg={"#2D9CDB"}>
              <Link href={`calendar/workout/${el}`} passHref>
                <CalcLink>Тренировка</CalcLink>
              </Link>
            </StyledContentBox>
            <StyledContentBox bg={"#F2994A"}>
              <Link href={`calendar/dieta/${el}`} passHref>
                <CalcLink>Диета</CalcLink>
              </Link>
            </StyledContentBox>
          </StyledDayContent>
        ) : null}
      </StyledDayBox>
    ) : (
      <StyledDayBox key={generateId()}>
        <DayBlur>
          <CalcDate>{el}</CalcDate>
        </DayBlur>
      </StyledDayBox>
    )
  })

  return (
    <motion.div
      initial="pageInital"
      animate="pageAnimate"
      variants={{
        pageInital: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <CalendarContainer>
        <StyledElementsContainer>{weekElements}</StyledElementsContainer>
        <StyledCalendarButtons>
          <StyledCalendarButton
            onClick={() => switchBetweenMonthHandle("minus")}
          >
            <span>&lt;</span>
          </StyledCalendarButton>
          <span style={{ fontFamily: "Roboto", lineHeight: "35px" }}>
            {format(dateToday, "MMMM yyyy")}
          </span>
          <StyledCalendarButton
            onClick={() => switchBetweenMonthHandle("plus")}
          >
            <span>&gt;</span>
          </StyledCalendarButton>
        </StyledCalendarButtons>
      </CalendarContainer>
    </motion.div>
  )
}

export default WithLayout(WithRefreshingToken(Calendar))
