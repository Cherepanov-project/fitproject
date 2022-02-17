import styled from "styled-components";

const Calendar = styled.div`
  max-width: 1000px;
  min-height: 50px;
  background-color: #ffffff;
  border-radius: 12px;
`;

const CalendarContainer = ({ children }: any) => {
  return (
    <>
      <Calendar>{children}</Calendar>
    </>
  );
};

export default CalendarContainer;
