import styled from "styled-components"

import { IImg } from "./workout.interface"

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
`

export const Container = styled.div`
    background-color: white;
    border-radius: 5px;
    display: flex;
    width: 100%;
    margin-bottom: 15px;
`

export const LeftContent = styled.div`
  margin: 110px 32px 142px 79px;
  display: flex;
  justify-content: space-between;
`

export const Exercise = styled.div`
  display: flex;
  flex-direction: column;
`

export const ExerciseTitle = styled.h1`
  font-family: "Arima Madurai";
  font-style: normal;
  font-weight: 800;
  font-size: 23.9784px;
  line-height: 39px;
  color: #404040;
`

export const ExerciseDescription = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13.2078px;
  line-height: 16px;
  color: #404040;
`

export const ImageWorkout = styled.img<IImg>`
  max-width: 359px;
  max-height: 362px;
  margin-top: 78px;
  margin-right: 83px;
  border-radius: 50px;
  width: ${({ imgWidth, imgHeight }) => {
    return imgWidth > imgHeight ? imgWidth : "auto"
  }};
  height: ${({ imgWidth, imgHeight }) => {
    return imgWidth > imgHeight ? "auto" : imgHeight
  }};
  margin-right: 0;
  min-width: ${({ imgWidth, imgHeight }) => {
    return imgWidth > imgHeight ? "300px" : "unset"
  }};
  min-height: ${({ imgWidth, imgHeight }) => {
    return imgWidth > imgHeight ? "unset" : "400px"
  }};
`

export const MusclesTitle = styled.h2`
  margin-top: 17.65px;
  font-family: "Arima Madurai";
  font-style: normal;
  font-weight: 800;
  font-size: 19.4233px;
  line-height: 32px;
  color: #969696;
`

export const MusclesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 450px;
  justify-content: space-between;
`

export const Muscle = styled.div`
  display: flex;
  align-items: center;
  width: 225px;
`

export const MuscleTitle = styled.div`
  padding: 5px 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 10.5509px;
  line-height: 12px;
  color: #404040;

  span {
    display: block;
    margin-top: 5px;
    font-size: 8.1242px;
    line-height: 10px;
    color: #969696;
  }
`