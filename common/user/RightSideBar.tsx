import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
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
	SquareBtn,
} from "../user/RightSideBarStyle";
import goalsIcon from "../images/icons/goals.svg";
import diet from "../images/icons/diet.svg";
import SeetingsIcon from "../images/icons/SeetingsIcon.svg";
import defaultAvatar from "../images/defaultAvatar.png";
import arrow from "../images/icons/arrow.svg";
import meter from "../images/icons/meter.svg";
import { formatDistanceToNow } from "date-fns";

const drawerWidth = "244px";

interface ISideBarProps {
	avatar: StaticImageData;
	userName: string;
	lastDate?: Date | number;
}

export const RightSideBar = ({
	avatar,
	userName,
	lastDate = new Date(),
}: ISideBarProps) => {
	const lastVisitTime = formatDistanceToNow(lastDate, { includeSeconds: true });

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
					<Avatar alt="avatar" src={!avatar ? defaultAvatar.src : avatar.src} />
					<UserInfo>
						<UserName>
							{userName || "User" /* временно, пока значение не приходит */}
						</UserName>
						<LastVisitTime>Joined {lastVisitTime}</LastVisitTime>
					</UserInfo>
				</UserInfoWrapper>
				<List
					sx={{
						margin: "auto 0",
					}}
				>
					{["Goals", "Diet", "seetings"].map((text, index) => (
						<ListItemButton
							sx={{
								marginTop: "30px",
								":hover": {
									boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
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
							<ListItemText primary={text} />
							<SquareBtn>
								<IconWrapper>
									<IconArrow src={arrow.src} width="12px"></IconArrow>
								</IconWrapper>
							</SquareBtn>
						</ListItemButton>
					))}
				</List>
				<WeightLoosGoalWrapper>
					Weight loos Goal
					<Loss>
						{`Loss: 5kg `}
						<span>/ Month</span>
					</Loss>
					<Meter src={meter.src}></Meter>
				</WeightLoosGoalWrapper>
			</Drawer>
		</Box>
	);
};
