import styled from "styled-components"

import { IColorfulTegPropStyle } from "./colorfulTeg.interface"

export const Tegs = styled.span<IColorfulTegPropStyle>`
    margin: 0;
    padding: 5px 12px;
    max-height: 24px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    border-radius: ${({ brRad }) => brRad};
`
