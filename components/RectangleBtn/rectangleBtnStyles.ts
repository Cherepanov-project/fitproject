import styled from "styled-components"

interface IBtnProps {
    bg: string
}

export const RectangleButton = styled.button<IBtnProps>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    width: 277px;
    height: 110px;
    color: #ffffff;
    background: ${({ bg }) => bg};
    border: none;
    border-radius: 40px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;

    @media (min-width: 2100px) {
        width: 477px;
        height: 160px;
    }
`

export const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
`
