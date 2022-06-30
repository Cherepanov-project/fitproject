import * as React from "react"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
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
import goalsIcon from "../images/UserBarIcons/goals.svg"
import diet from "../images/UserBarIcons/diet.svg"
import SeetingsIcon from "../images/UserBarIcons/SeetingsIcon.svg"
import defaultAvatar from "../images/UserBarIcons/defaultAvatar.png"
import arrow from "../images/UserBarIcons/arrow.svg"
import meter from "../images/UserBarIcons/meter.svg"
import { formatDistanceToNow } from "date-fns"

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
                                            <Icon src={goalsIcon.src}></Icon>
                                        </IconWrapper>
                                    ) : index === 1 ? (
                                        <IconWrapper>
                                            <Icon src={diet.src}></Icon>
                                        </IconWrapper>
                                    ) : (
                                        <IconWrapper>
                                            <Icon src={SeetingsIcon.src}></Icon>
                                        </IconWrapper>
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={{ width: "100%" }}
                                />
                                <IconArrow
                                    src={arrow.src}
                                    width="12px"
                                ></IconArrow>
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
                    <Meter src={meter.src}></Meter>
                </WeightLoosGoalWrapper>
            </RightSideBarWrapper>
        </MainWrapper>
    )
}
