import styled from "styled-components"

interface IIcoProps {
    bgColor: string
    bgImg: string
}

export const CustomIcon = styled.div<IIcoProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 81px;
    height: 74px;
    background: ${({ bgColor }) => bgColor};
    background-image: url(${({ bgImg }) => bgImg});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    border-radius: 20px;
`
