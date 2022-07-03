import styled from "styled-components"

interface ColorfulTegProp {
    color?: string
    brRad?: string
    backgroundColor?: string
}

export const Tegs = styled.span<ColorfulTegProp>`
    margin: 0;
    padding: 5px 12px;
    max-height: 24px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    border-radius: ${({ brRad }) => brRad};
`
