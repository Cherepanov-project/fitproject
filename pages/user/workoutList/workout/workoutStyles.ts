import styled from "styled-components"

interface img {
    imgUrl: string
    imgWidth: number
    imgHeight: number
}

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: 0 auto;

    @media (max-width: 2000px) {
        width: 100%;
    }
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

export const Image = styled.img<img>`
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

export const BottomContainer = styled.div`
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: flex-start;
    padding: 0 58px;
`

export const ImgWrapper = styled.div<img>`
    width: 118px;
    height: 126px;
    border-radius: 50px;
    background: url(${({ imgUrl }) => imgUrl}) #fff no-repeat;
    background-size: ${({ imgWidth, imgHeight }) => {
        return imgWidth > imgHeight ? "100% auto" : "auto 100%"
    }};
    background-position: 50% 50%;
    @media (min-width: 2000px) {
        width: 218px;
        height: 226px;
    }
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
`
export const Reps = styled.div`
    font-size: 15px;
    color: #969696;
`
