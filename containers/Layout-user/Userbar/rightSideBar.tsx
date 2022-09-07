import * as React from "react"
import { useRouter } from "next/router"
import Cookies from "js-cookie"

// libs
import { formatDistanceToNow } from "date-fns"

// ui libs

import { ListItemIcon, List } from "@mui/material"

import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Logout, PersonAdd, Settings } from "@mui/icons-material"

// images
import defaultAvatar from "@/common/images/layoutUser/userbarIcons/defaultAvatar.png"
import arrow from "@/common/images/layoutUser/userbarIcons/arrow.svg"

import { PaperProps } from "./rightSideBar.styles"
import generateId from "@/utils/generateId"
import { ISideBarProps } from "./rightSideBar.interface"
import { ACCESS_TOKEN } from "@/constants/titles"
import { WeightLossGoal } from "@/components/WeightLossGoal/WeightLossGoal"
import {
  Avatar,
  Icon,
  UserName,
  IconWrapper,
  UserInfoWrapper,
  LastVisitTime,
  UserInfo,
  WeightLossGoalWrapper,
  IconArrow,
  Loss,
  RightSideBarWrapper,
  MainWrapper,
  StyledSpan,
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
} from "./rightSideBar.styles"
import { FontRoboto } from "@/utils/fonts/fontStyles"
import { rightSidebar } from "@/models/user/layout/sidebarModel"
import Link from "next/link"

const drawerWidth: string = "244px"

export const RightSideBar: React.FC<ISideBarProps> = ({
  avatar = defaultAvatar,
  userName = "User",
  lastDate = new Date(),
}: ISideBarProps) => {
  const router = useRouter()
  const lastVisitTime = formatDistanceToNow(lastDate, {
    includeSeconds: true,
  })
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const [kilograms, setKilograms] = React.useState(5)

  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    event.preventDefault()
    if (event.key === "Escape") {
      handleClose()
    }
  }

  const handleLogout = () => {
    Cookies.remove(ACCESS_TOKEN)
    router.push("/user")
  }
  return (
    <MainWrapper>
      <RightSideBarWrapper>
        <UserInfoWrapper onClick={handleClick}>
          <Avatar alt="avatar" src={avatar.src} />
          <UserInfo>
            <UserName>{userName}</UserName>
            <LastVisitTime>Joined {lastVisitTime}</LastVisitTime>
          </UserInfo>
        </UserInfoWrapper>
        <List sx={{ margin: "auto 0px", padding: "8px" }}>
          {rightSidebar.map(({ text, src, route, bg }, index) => (
            <Link href={route} key={generateId()} passHref>
              <StyledListItemButton
                sx={{
                  position: "relative",
                  marginTop: "30px",
                  padding: "24px 24px 24px 10px",
                }}
              >
                <StyledListItemIcon>
                  <FontRoboto />
                  <IconWrapper backgroundColor={bg}>
                    <Icon src={src.toString()} />
                  </IconWrapper>
                </StyledListItemIcon>
                <StyledListItemText primary={text} />
                <IconArrow src={arrow.src} />
              </StyledListItemButton>
            </Link>
          ))}
        </List>
        <WeightLossGoalWrapper>
          Weight loss Goal
          <Loss>
            {`Loss: ${kilograms}kg `}
            <StyledSpan>/ Month</StyledSpan>
          </Loss>
          <WeightLossGoal kg={kilograms} />
        </WeightLossGoalWrapper>
      </RightSideBarWrapper>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClick={handleClose}
        PaperProps={PaperProps}
        onKeyDown={handleListKeyDown}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </MainWrapper>
  )
}
