import * as React from "react"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Cookies from "js-cookie"
import SettingsIcon from "../../../common/images/layoutUser/userbarIcons/SeetingsIcon.svg"

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
import goalsIcon from "../../../common/images/layoutUser/userbarIcons/goals.svg"
import diet from "../../../common/images/layoutUser/userbarIcons/diet.svg"
import defaultAvatar from "../../../common/images/layoutUser/userbarIcons/defaultAvatar.png"
import arrow from "../../../common/images/layoutUser/userbarIcons/arrow.svg"
import meter from "../../../common/images/layoutUser/userbarIcons/meter.svg"
import { formatDistanceToNow } from "date-fns"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Logout, PersonAdd, Settings } from "@mui/icons-material"
import { useRouter } from "next/router"
import { PaperProps } from "./rightSideBar.styles"
import generateId from "../../../utils/generateId"
const drawerWidth: string = "244px"

interface ISideBarProps {
    avatar: StaticImageData
    userName: string
    lastDate?: Date | number
    includeSeconds: boolean
}

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
        Cookies.remove("userToken")
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
                    }}
                >
                    {["Goals", "Diet", "Settings"].map(
                        (text: string, index: number) => (
                            <ListItemButton
                                key={generateId()}
                                sx={{
                                    position: "relative",
                                    marginTop: "30px",
                                    padding: "24px",
                                    width: "32px",
                                    height: "32px",
                                    ":hover": {
                                        transition: "1s ",
                                        backgroundColor: "#F0EFFF",
                                        width: "98%",
                                        height: "40px",
                                        padding: "24px 24px",
                                        right: "0px",
                                        boxShadow:
                                            "0px 1px 4px rgba(0, 0, 0, 0.25)",
                                        borderRadius: "10px",
                                        img: {
                                            transition: "1s",
                                            border: "none",
                                            boxShadow: "none",
                                        },
                                    },
                                }}
                            >
                                <ListItemIcon>
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
                                    sx={{ width: "100%" }}
                                />
                                <IconArrow src={arrow.src} width="12px" />
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
