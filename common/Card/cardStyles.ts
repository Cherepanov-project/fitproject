import styled from "styled-components";

interface CardContainerProps {
    width: string,
    height: string,
    margin: string,
    borderColor: string,
};

interface CardContentProps {
    padding: string,
}

export const CardContainer = styled.div<CardContainerProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin: ${({ margin }) => margin};
    background-color: rgba(255, 255, 255, 1);
    outline: 1px solid rgba(223, 224, 235, 1);
    outline-color: ${({ borderColor }) => borderColor};
    border-radius: 8px;
    display: flex;
    flex-grow: 0;
`;

export const CardContent = styled.div<CardContentProps>`
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    margin: 0;
    padding: ${({ padding }) => padding};
`