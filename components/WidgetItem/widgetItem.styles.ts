import styled from "styled-components"

import {
    ITaskStatusProps,
    IWidgetItemContentProps,
} from "./widgetItem.interface"

export const WidgetItemContainer = styled.div`
    width: 100%;
    height: 58px;
    margin: 0;
    background-color: rgba(255, 255, 255, 1);
    border-bottom: 1px solid rgba(223, 224, 235, 1);
    display: flex;
    flex-grow: 0;
`

export const WidgetItemContent = styled.div<IWidgetItemContentProps>`
    box-sizing: border-box;
    display: flex;
    flex-basis: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin: 0;
    padding: ${({ padding }) => padding};
`

export const CheckboxIcon = styled.div`
    height: 24px;
    width: 24px;
    border-radius: 20px;
    border: 2px solid rgba(197, 199, 205, 1);
`

export const CheckedCheckboxIcon = styled.div`
    position: relative;
    display: inline-block;
    height: 24px;
    width: 24px;
    border-radius: 20px;
    background: rgba(55, 81, 255, 1);

    &::before {
        position: absolute;
        left: 0;
        top: 42%;
        height: 35%;
        width: 2px;
        border-radius: 2px;
        background-color: #ffffff;
        content: "";
        transform: translateX(10px) rotate(-45deg);
        transform-origin: left bottom;
    }

    &::after {
        position: absolute;
        left: 0;
        bottom: 23%;
        height: 2px;
        border-radius: 2px;
        width: 55%;
        background-color: #ffffff;
        content: "";
        transform: translateX(10px) rotate(-45deg);
        transform-origin: left bottom;
    }
`

export const TaskStatus = styled.div<ITaskStatusProps>`
    display: flex;
    align-items: center;
    padding: 5px 12px;
    border-radius: 8px;
    background-color: ${({ color }) => color};
`
export const StyledTextStatus = styled.p`
    user-select: none;
    fontFamily="Mulish";
    fontSize="11px";
    color: "rgba(255, 255, 255, 1)";
`
export const StyledTextTask = styled.p`
    user-select: none;
    fontFamily="Mulish";
    fontSize="14px";
    color: "rgba(37, 39, 51, 1)"
`