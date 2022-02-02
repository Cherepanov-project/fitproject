import styled from "styled-components";

const Calendar = styled.div`
  max-width: 1000px;
  min-height: 50px;
  background-color: #ffffff;
  border-radius: 2%;
  padding: 8px;
`;

const CalendarContainer = ({ children }) => {
  return (
    <>
      <Calendar>{children}</Calendar>
    </>
  );
};

export default CalendarContainer;
