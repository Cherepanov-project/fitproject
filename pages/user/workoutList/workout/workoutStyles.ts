import styled from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    background-color: white;
    border-radius: 5px;
    display: flex;
    width: 100%;
    margin-bottom: 15px;
    /* padding: 110px 67px; */
    /* margin: 0 60px 15px 60px; */
`

export const LeftContent = styled.div`
    display: flex;
    /* flex-direction: column; */
    margin: 110px 0 162px 200px;
`

export const Exercise = styled.div`
    display: flex;
    flex-direction: column;
`

export const ExerciseTitle = styled.h1`
    font-size: 23px;
`

export const ExerciseDescription = styled.div`

`

export const Image = styled.img`
    width: 489px;
    height: 492px;
    margin-right: 200px;

    @media (max-width: 2100px) {
        width: 359px;
        height: 362px;
        margin-right: 100px;
    }
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

export const ImgWrapper = styled.img`
    width: 118px;
    height: 126px;
    border-radius: 50px;

    @media (min-width: 2000px) {
        width: 168px;
        height: 156px;
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