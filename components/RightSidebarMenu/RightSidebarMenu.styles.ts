import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import styled from "styled-components"

type IconWrapperProps = {
  backgroundColor: string
}

export const StyledListItemButton = styled(ListItemButton)`
  height: 60px;
  &:after {
    content: "";
    background-color: #47dcc43b;
    display: block;
    position: absolute;
    height: 100%;
    width: 0%;
    left: 0;
    top: 0;
    opacity: 0;
    transition: width 500ms linear, opacity 0.5s ease 1s;
    box-shadow: 0px 1px 4px rgb(0 0 0 / 25%);
    border-radius: 10px;
  }
  &:hover {
    border-radius: 10px;
    background: transparent;
    img {
      transition: 1s;
      border: none;
      box-shadow: none;
    }
    &:after {
      width: 100%;
      opacity: 1;
      transition: width 500ms linear;
    }
  }
`

export const StyledListItemIcon = styled(ListItemIcon)`
  z-index: 2;
  margin-right: 10px;
`
export const StyledListItemText = styled(ListItemText)`
  width: 100%;
  z-index: 2;
`
export const Icon = styled.img`
  width: 27px;
  position: absolute;
  transform: translate(-50%, -50%);
`

export const IconWrapper = styled.div<IconWrapperProps>`
  background: ${props => props.backgroundColor || "transparent"};
  border-radius: 100%;
  padding: 27px;
  width: 27px;
  height: 27px;
  position: relative;
`

export const IconArrow = styled.img`
  position: absolute;
  padding: 10px 12px 10px;
  left: 215px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 32px;
  height: 31px;
  z-index: 2;
  transition: all 1s ease;
`
