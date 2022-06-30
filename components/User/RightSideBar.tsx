import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { formatDistanceToNow } from "date-fns"

import goalsIcon from "../../common/images/icons/goals.svg"
import diet from "../../common/images/icons/diet.svg"
import SettingsIcon from "../../common/images/icons/settingsIcon.svg"
import defaultAvatar from "../../common/images/defaultAvatar.png"
import arrow from "../../common/images/icons/arrow.svg"
import meter from "../../common/images/icons/meter.svg"
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
    /* SquareBtn, */
} from "./RightSideBarStyle"

interface ISideBarProps {
    avatar: StaticImageData
    userName: string
    lastDate?: Date | number
    includeSeconds: boolean
}

const drawerWidth: string = "244px"

const RightSideBar: React.FC<ISideBarProps> = ({
    avatar = defaultAvatar,
    userName = "User",
    lastDate = new Date(),
}: ISideBarProps) => {
    const lastVisitTime = formatDistanceToNow(lastDate, {
        includeSeconds: true,
    })

    return (
        <Box sx={{ display: "flex" }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="permanent"
                anchor="right"
            >
                <UserInfoWrapper>
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
                                key={index}
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
            </Drawer>
        </Box>
    )
}

export { RightSideBar }
