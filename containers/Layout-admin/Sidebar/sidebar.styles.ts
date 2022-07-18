import styled, { css } from "styled-components"

import { TStyledDiv } from "../layoutAdmin.interface"

export const StyleSidebarWrapper = styled.div`
    width: 255px;
    background-color: #363740;

    color: #a4a6b3;
`

export const StyleSidebarHeader = styled.div`
    box-sizing: border-box;

    width: 100%;

    margin: 32px;

    font-weight: 700;
    font-size: 19px;
    line-height: 24px;
    letter-spacing: 0.4px;
    color: #a4a6b3;

    opacity: 0.7;

    cursor: pointer;

    a {
        display: flex;
        align-items: center;
    }
`

export const StyleSidebarItem = styled.div<TStyledDiv>`
    box-sizing: border-box;
    padding-left: 32px;

    font-weight: 400;
    font-size: 16px;
    line-height: 56px;

    letter-spacing: 0.2px;

    cursor: pointer;

    &:hover {
        background-color: #3f4049;
        border-left: 3px solid #dde2ff;
        padding-left: 29px;
    }

    ${props => {
        if (props.selected) {
            return css`
                background-color: #3f4049;
                border-left: 3px solid #dde2ff;
                padding-left: 29px;

                a {
                    color: #dde2ff;
                }

                img {
                    fill: white;
                }
            `
        }
    }}
`

export const StyleItemName = styled.span`
    &::first-letter {
        text-transform: uppercase;
    }

    padding-left: 24px;
    display: inline-block;
`

export const StyleMenuList = styled.ul`
    width: 255px;
    padding: 0;
    margin: 0;
`

export const StyleDivider = styled.hr`
    border: 0;
    height: 1px;
    background: #40414a;
`

export const StyleLink = styled.a`
    display: flex;
    text-decoration: none;
    align-items: center;

    color: #a4a6b3;

    &:hover {
        color: #dde2ff;
    }
`
