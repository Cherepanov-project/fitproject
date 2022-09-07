import { rightSidebar } from "@/models/user/layout/sidebarModel"
import { List } from "@mui/material"
import {
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
  IconWrapper,
  Icon,
  IconArrow,
} from "./RightSidebarMenu.styles"
import arrow from "@/common/images/layoutUser/userbarIcons/arrow.svg"
import Link from "next/link"
import React from "react"
import generateId from "@/utils/generateId"

export const RightSidebarMenu = React.memo(() => {
  return (
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
  )
})
