import styled from "styled-components";

interface img {
    imgUrl: string;
    imgWidth: number;
    imgHeight: number;
}

export const ImgWrapper = styled.div<img>`
    width: 118px;
    height: 126px;
    border-radius: 50px;
    background: url(${({ imgUrl }) => imgUrl}) #fff no-repeat;   
    background-size: ${({ imgWidth, imgHeight }) => {
        return imgWidth>imgHeight?'100% auto':'auto 100%'
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
export const Exercise = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 1px;
`
export const Reps = styled.div`
    font-size: 15px;
    color: #969696;
`