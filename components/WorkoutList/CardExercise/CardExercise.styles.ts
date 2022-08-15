import styled from "styled-components"
import { IImg } from "@/components/WorkoutList/ItemList/itemList.interface"

export const StyledBox = styled.div`
  height: 202px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);
  border-radius: 7.03394px;
  padding: 3px;
`

export const StyledContentBox = styled.div`
  width: 100%;
  height: 100%;
  background: #f0f7ff;
  border-radius: 7.03394px;
  padding: 13px 2px 3px 2px;
  box-sizing: border-box;
`

export const StyledImage = styled.div<IImg>`
  width: 118px;
  height: 126px;
  margin: 0 auto;
  border-radius: 50px;
  background-color: #ffffff;
  background: url(${props => props.imgUrl}) no-repeat center center #ffffff;
  background-size: ${({ imgWidth, imgHeight }) => {
    return imgWidth > imgHeight ? "70% auto" : "auto 70%"
  }};
`

export const StyledTextBox = styled.div`
  padding-top: 13px;
  text-align: center;
`

export const StyledName = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 15.107px;
  line-height: 18px;
  color: #000000;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const StyledReps = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12.9488px;
  line-height: 15px;
  color: #969696;
`
