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
    margin: 110px 83px 142px 79px;
    display: flex;
    justify-content: space-between;
`

export const Exercise = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`

export const ExerciseTitle = styled.h1`
    font-size: 23px;
`

export const ExerciseDescription = styled.div``

export const ImageWorkout = styled.img<IImg>`
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
    font-size: 22px;
    color: #969696;
`

export const MusclesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 400px;
    justify-content: space-between;
`

export const Muscle = styled.div`
    display: flex;
    align-items: center;

    span {
        font-size: 15px;
        font-weight: bold;
    }
`
