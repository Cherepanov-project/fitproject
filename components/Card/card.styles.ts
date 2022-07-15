import styled from "styled-components"

import { ICardContainerProps, ICardContentProps } from "./card.interface"

export const CardContainer = styled.div<ICardContainerProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin: ${({ margin }) => margin};
    background-color: rgba(255, 255, 255, 1);
    outline: ${({ outline }) => outline};
    outline-color: ${({ borderColor }) => borderColor};
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-grow: 0;
`

export const CardContent = styled.div<ICardContentProps>`
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    margin: 0;
    padding: ${({ padding }) => padding};
`
