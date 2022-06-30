import * as React from "react"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { formatDistanceToNow } from "date-fns"

import goalsIcon from "../../../common/images/layoutUser/userbarIcons/goals.svg"
import diet from "../../../common/images/layoutUser/userbarIcons/diet.svg"
import SettingsIcon from "../../../common/images/layoutUser/userbarIcons/SeetingsIcon.svg"
import defaultAvatar from "../../../common/images/layoutUser/userbarIcons/defaultAvatar.png"
import arrow from "../../../common/images/layoutUser/userbarIcons/arrow.svg"
import meter from "../../../common/images/layoutUser/userbarIcons/meter.svg"
import generateId from "../../../utils/generateId"
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
} from "./RightSideBarStyle"

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
    const lastVisitTime = formatDistanceToNow(lastDate, {
        includeSeconds: true,
    })

    return (
        <MainWrapper>
            <RightSideBarWrapper>
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
        </MainWrapper>
    )
}
