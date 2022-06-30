import styled from "styled-components"

const Calendar = styled.div`
    min-height: 50px;
    border-radius: 12px;
    background-color: white;
    width: 100%;
`

const CalendarContainer = ({ children }: any) => {
    return (
        <>
            <Calendar>{children}</Calendar>
        </>
    )
}

export default CalendarContainer
