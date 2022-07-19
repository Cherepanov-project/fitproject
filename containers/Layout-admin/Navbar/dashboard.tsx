import * as React from "react"
import Image from "next/image"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import IconButton from "@mui/material/IconButton"
import Badge from "@mui/material/Badge"

import imageBell from "@/common/images/layoutAdmin/navbarIcons/bell.png"

const PositionedMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <IconButton
                href={"#"}
                size="large"
                aria-label="show 1 new mails"
                color="inherit"
                onClick={handleClick}
            >
                <Badge badgeContent={1} color="primary" variant="dot">
                    <Image
                        src={imageBell}
                        width="16"
                        height="16"
                        alt="search"
                    />
                </Badge>
            </IconButton>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <MenuItem onClick={handleClose} href={"#"}>
                    Message 1
                </MenuItem>
                <MenuItem onClick={handleClose} href={"#"}>
                    Message 2
                </MenuItem>
                <MenuItem onClick={handleClose} href={"#"}>
                    Message 3
                </MenuItem>
            </Menu>
        </div>
    )
}

export default PositionedMenu
