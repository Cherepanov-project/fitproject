import { Calendar } from "./calendarContainer.styles"

const CalendarContainer = ({ children }: any) => {
    return (
        <>
            <Calendar>{children}</Calendar>
        </>
    )
}

export default CalendarContainer
