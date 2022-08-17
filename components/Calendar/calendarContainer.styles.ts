import styled from "styled-components"

import { IDropMenuProps, IItemDivProps } from "./calendarContainer.interface"

export const Calendar = styled.div`
  min-height: 50px;
  border-radius: 12px;
  background-color: white;
  width: 100%;
`

export const CalcHead = styled.div`
  width: 99%;
  text-align: end;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`
export const CalcLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-family: "Roboto";
  padding: 23px 0;
  display: block;
  letter-spacing: 1.2px;
  font-size: 12px;
`

export const DietaLink = styled.div`
  background: #219653;
  border-radius: 10px;
  margin-top: 5px;
  cursor: pointer;
  text-align: center;
`

export const WorkoutLink = styled.div`
  background: #2d9cdb;
  border-radius: 10px;
  margin-top: 5px;
  cursor: pointer;
  text-align: center;
`

export const FlexItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
`

export const DayBlur = styled.div`
  opacity: 0.3;
`

type ContentBoxType = {
  bg: string
}

export const StyledContentBox = styled.div<ContentBoxType>`
  background: ${props => props.bg};
  text-align: center;
  cursor: pointer;
  height: 50%;
  text-align: center;
`

export const CalcDate = styled.div`
  font-size: 14px;
  font-family: "Roboto";
  color: #a1a1a1;
`

export const CalendarDiv = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const DietaHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
  font-size: 18px;
  font-weight: bold;
  padding-top: 20px;
`

export const FoodLink = styled.a`
  text-decoration: none;
  color: #4caf50;
  cursor: pointer;
`

export const ListUl = styled.ul`
  margin: 0;
  padding: 0;
  line-height: 30px;
`

export const ListItem = styled.li`
  height: 100px;
  justify-content: space-between;
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  border-top: 1px solid #f0f2f5;
  padding-left: 60px;
  padding-right: 20px;
  align-items: center;
`

export const ItemDiv = styled.div<IItemDivProps>`
  width: 15%;
  color: ${({ color }) => color || "black"};
  font-size: ${({ fontSize }) => fontSize || "14px"};
`
export const ListItemName = styled.li`
  height: 70px;
  justify-content: space-between;
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  padding-left: 60px;
  padding-right: 40px;
  margin-bottom: 15px;
`

export const ButtonMenu = styled.button`
  color: #b0bac9;
  border: none;
  font-size: 30px;
  cursor: pointer;
  background: transparent;
`

export const DropMenu = styled.div<IDropMenuProps>`
  display: ${props => {
    return props.$display ? "block" : "none"
  }};
  position: absolute;
  background-color: #7b809a;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 2px;
  padding: 2px;
  top: -30px;
  right: 35px;
`
export const ButtonDiv = styled.div`
  position: relative;
`
export const StyledCalendarButtons = styled.div`
  display: flex;
  justify-content: center;
  user-select: none;
  padding: 20px 0;
`
export const StyledCalendarButton = styled.button`
  position: relative;
  border: none;
  border-radius: 100%;
  background: #47dcc46b;
  width: 35px;
  height: 35px;
  font-size: 20px;
  color: #fff;
  margin: 0 40px;
  :hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5);
    background: #10edc96b;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export const StyledElementsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 20px 0 20px;
`

export const StyledDayBox = styled.div`
  width: calc(100% / 7);
  min-height: 120px;
  border: 1px dashed #e0e0e0;
  padding: 10px;
  position: relative;
`

export const StyledDayContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`
