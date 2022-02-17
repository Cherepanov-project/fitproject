import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from "next/image";
import styled from 'styled-components';
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

// const Anavbar = styled.a`
//   font-size: 14px;
//   font-weight: 500;
// `;
//
// const style = {
//     root: {
//         minWidth:40,
//         minHeight:40,
//         lineHeight:1,
//         borderRadius:20
//     }
// }

export default function PositionedMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                size="large"
                aria-label="show 1 new mails"
                color="inherit"
                onClick={handleClick}
            >
                <Badge badgeContent={1} color="primary" variant="dot">
                    <Image src='/navbarIcons/bell.png' width='16' height='16' alt='search'/>
                </Badge>
            </IconButton>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleClose}>Message 1</MenuItem>
                <MenuItem onClick={handleClose}>Message 2</MenuItem>
                <MenuItem onClick={handleClose}>Message 3</MenuItem>
            </Menu>
        </div>
    );
}






















