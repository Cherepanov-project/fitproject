import styled from "styled-components"

import { IFilterItemActiveProp } from "./filterMenu.interface"

export const FilterItem = styled.div<IFilterItemActiveProp>`
    padding-right: 15px;
    transform: ${({ filterItemActive }) =>
    filterItemActive ? "translateX(-110%)" : "translateX(0%)"};
    transition: transform 0.5s ease;
`
export const ContainerRight = styled.div<IFilterItemActiveProp>`
    margin-top: -130px;
    overflow: hidden;
    transform: ${({ filterItemActive }) =>
    filterItemActive ? "translateX(0%)" : "translateX(110%)"};
    transition: transform 0.5s ease;
`
