import * as React from "react"
import { useRouter } from "next/router"
import Cookies from "js-cookie"

// libs
import { formatDistanceToNow } from "date-fns"

// ui libs
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Logout, PersonAdd, Settings } from "@mui/icons-material"

// images
import defaultAvatar from "@/common/images/layoutUser/userbarIcons/defaultAvatar.png"
import arrow from "@/common/images/layoutUser/userbarIcons/arrow.svg"
import meter from "@/common/images/layoutUser/userbarIcons/meter.svg"

import { PaperProps } from "./rightSideBar.styles"
import generateId from "@/utils/generateId"
import { ISideBarProps } from "./rightSideBar.interface"
import { ACCESS_TOKEN } from "@/constants/titles"
import {
  Avatar,
  Icon,
  UserName,
  IconWrapper,
  UserInfoWrapper,
  LastVisitTime,
  UserInfo,
  WeightLoosGoalWrapper,
  IconArrow,
  Loss,
  Meter,
  RightSideBarWrapper,
  MainWrapper,
  /* SquareBtn, */
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
        <List
          sx={{
            margin: "auto 0",
            padding: "8px",
          }}
        >
          {rightSidebar.map(({ text, src, route, bg }, index) => (
            <Link href={route} key={generateId()}>
              <ListItemButton
                sx={{
                  position: "relative",
                  marginTop: "30px",
                  padding: "24px 24px 24px 10px",
                  height: "60px",
                  ":after": {
                    content: '""',
                    backgroundColor: "#47dcc43b",
                    display: "block",
                    position: "absolute",
                    height: "100%",
                    width: "0%",
                    left: "0",
                    top: "0",
                    opacity: "0",
                    transition: "width 500ms linear, opacity 0.5s ease 1s",
                    boxShadow: "0px 1px 4px rgb(0 0 0 / 25%)",
                    borderRadius: "10px",
                  },
                  ":hover": {
                    borderRadius: "10px",
                    background: "transparent",
                    img: {
                      transition: "1s",
                      border: "none",
                      boxShadow: "none",
                    },
                    ":after": {
                      width: "100%",
                      opacity: "1",
                      transition: "width 500ms linear",
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ zIndex: "2", marginRight: "10px" }}>
                  <FontRoboto />
                  <IconWrapper backgroundColor={bg}>
                    <Icon src={src.toString()} />
                  </IconWrapper>
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ width: "100%", zIndex: "2" }}
                />
                <IconArrow src={arrow.src} />
              </ListItemButton>
            </Link>
          ))}
        </List>
        <WeightLoosGoalWrapper>
          Weight loos Goal
          <Loss>
            {`Loss: 5kg `}
            <span>/ Month</span>
          </Loss>
          <Meter src={meter.src} />
        </WeightLoosGoalWrapper>
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
