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
import SettingsIcon from "@/common/images/layoutUser/userbarIcons/SeetingsIcon.svg"
import goalsIcon from "@/common/images/layoutUser/userbarIcons/goals.svg"
import diet from "@/common/images/layoutUser/userbarIcons/diet.svg"
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
                        padding: "8px"
                    }}
                >
                    {["Goals", "Diet", "Settings"].map(
                        (text: string, index: number) => (
                            <ListItemButton
                                key={generateId()}
                                sx={{
                                    position: "relative",
                                    marginTop: "30px",
                                    marginLeft: "2px",
                                    padding: "24px",
                                    width: "100%",
                                    height: "32px",
                                    ":after": {
                                        content: '""',
                                        backgroundColor: "#f0efff",
                                        display: "block",
                                        position: "absolute",
                                        height: "100%",
                                        width: "0%",
                                        left: "0",
                                        top: "0",
                                        opacity: "0",
                                        transition: "width 500ms linear, opacity 0.5s ease 1s",
                                        boxShadow: "0px 1px 4px rgb(0 0 0 / 25%)",
                                        borderRadius: "10px"
                                    },
                                    ":hover": {
                                        backgroundColor: "transparent",
                                        width: "100%",
                                        height: "40px",
                                        padding: "24px 24px",
                                        right: "0",
                                        borderRadius: "10px",
                                        img: {
                                            transition: "1s",
                                            border: "none",
                                            boxShadow: "none"
                                        },
                                        ":after": {
                                            width: "100%",
                                            opacity: "1",
                                            transition: "width 500ms linear"
                                        }
                                    }
                                }}
                            >
                                <ListItemIcon sx={{ zIndex: "2" }}>
                                    {index === 0 ? (
                                        <IconWrapper>
                                            <Icon src={goalsIcon.src} />
                                        </IconWrapper>
                                    ) : index === 1 ? (
                                        <IconWrapper>
                                            <Icon src={diet.src} />
                                        </IconWrapper>
                                    ) : (
                                        <IconWrapper>
                                            <Icon src={SettingsIcon.src} />
                                        </IconWrapper>
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={{ width: "100%", zIndex: "2" }}
                                />
                                <IconArrow src={arrow.src} />
                            </ListItemButton>
                        )
                    )}
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
