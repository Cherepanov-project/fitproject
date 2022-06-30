import styled from "styled-components"

import dots from "../../common/images/icons/3dots.svg"

let dotsSrc = dots
if (dots.src) {
    dotsSrc = dots.src
}

export const ProgressButton = styled.button`
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 237px;
    border: none;
    border-radius: 50px;

    @media (min-width: 2200px) {
        width: 467px;
    }

    @media (max-width: 2200px) {
        width: 30%;
    }
`

export const IcoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -35px;
    width: 92px;
    height: 83px;
    background: linear-gradient(180deg, #3f36c6 0%, #4439de 100%);
    border-radius: 20px;
`

export const Dots = styled.div`
    position: absolute;
    top: 25px;
    right: 18px;
    width: 25px;
    height: 25px;
    background-image: url(${dotsSrc});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    border: none;
`

export const Title = styled.div`
    margin-top: 70px;
    color: rgba(65, 56, 208, 1);
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.005e;
`

export const SubTitle = styled.div`
    color: rgba(120, 120, 120, 1);
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.005em;
`

export const Target = styled.div`
    align-self: start;
    margin-top: 15px;
    margin-left: 7%;
    color: rgba(120, 120, 120, 1);
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.005em;
`
