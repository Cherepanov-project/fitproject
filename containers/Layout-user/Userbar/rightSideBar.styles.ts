import styled from "styled-components"
import { IconWrapperProps } from "@/containers/Layout-user/layoutUser.interface"
import { ListItemButton, ListItemIcon, ListItemText, List } from "@mui/material"

export const StyledList = styled(List)`
  &&& {
    margin: auto 0px;
    padding: 8px;
  }
`

export const StyledListItemButton = styled(ListItemButton)`
  &&& {
    position: relative;
    margin-top: 30px;
    padding: 24px 24px 24px 10px;
  }
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

export const MainWrapper = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  font-family: "Inter";
`

export const RightSideBarWrapper = styled.div`
  width: 274px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`

export const UserInfoWrapper = styled.div`
  display: flex;
  margin-top: 34px;
  &:hover {
    cursor: pointer;
  }
`

export const UserInfo = styled.div`
  align-self: center;
`

export const WeightLossGoalWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`

export const Loss = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-top: 15px;
`

export const StyledSpan = styled.span`
  font-weight: 400;
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

export const Avatar = styled.img`
  width: 64px;
  height: 65px;
  margin: 0px 10px 0px 24px;
  border: 2px solid #6d63ff;
  box-sizing: border-box;
  border-radius: 100px;
  img {
    border-radius: 35%;
  }
`

export const UserName = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.005em;
`

export const LastVisitTime = styled.div`
  font-weight: normal;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.005em;
  color: #787878;
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

export const PaperProps = {
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
}
