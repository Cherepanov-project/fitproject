import React, { useState } from "react"
import Image from "next/image"
import { format } from "date-fns"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import EditIcon from "@mui/icons-material/Edit"
import {
    TableRow,
    TableCell,
    Avatar,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material"

import { SecondaryText, Text, RowAvatar, WrapBnt } from "./userItem.styles"
import avatarUser from "./images/avatarUser.jpg"
import ColorfulTeg from "../ColorfulTeg"
import { MenuIcon } from "../FilterBtn/content.styles"

interface IUserItemProps {
    nameUser: string
    avatar?: string
    dateRegister: string
    role: string
    email: string
    sex: string
}

const options = ["Delete", "Edit"]

const UserItem: React.FC<IUserItemProps> = ({
    nameUser,
    dateRegister,
    email,
    role,
    sex,
    avatar = avatarUser,
}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    const deleteArticle = () => {
        // функция для удаленея рецепта
        console.log("delete")
    }
    return (
        <TableRow hover sx={{ cursor: "pointer" }}>
            <TableCell sx={{ paddingLeft: 3.5, display: "flex", padding: 1 }}>
                <Avatar sx={{ margin: 2 }}>
                    <Image src={avatar} />
                </Avatar>
                <RowAvatar>
                    <Text>Email address:</Text>
                    <SecondaryText>{email}</SecondaryText>
                </RowAvatar>
            </TableCell>
            <TableCell sx={{ paddingLeft: 3.5, paddingTop: 1 }}>
                <Text>{nameUser}</Text>
                <SecondaryText>{sex}</SecondaryText>
            </TableCell>
            <TableCell sx={{ paddingLeft: 3.5, paddingTop: 1 }}>
                <Text>{format(new Date(dateRegister), "MMM LL, u")}</Text>
                <SecondaryText>
                    {format(new Date(dateRegister), "h:mm aaa")}
                </SecondaryText>
            </TableCell>
            <TableCell sx={{ paddingLeft: 3.5, paddingTop: 1, lineHeight: 1 }}>
                <WrapBnt>
                    {role === "admin" ? (
                        <ColorfulTeg text={role} backgroundColor="#F12B2C" />
                    ) : (
                        <ColorfulTeg text={role} />
                    )}
                    <MenuIcon>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? "long-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            {options.map(option => (
                                <MenuItem
                                    key={option}
                                    selected={option === "Pyxis"}
                                    onClick={handleClose}
                                >
                                    {option === "Delete" ? (
                                        <DeleteForeverIcon
                                            onClick={deleteArticle}
                                        />
                                    ) : (
                                        <EditIcon />
                                    )}
                                </MenuItem>
                            ))}
                        </Menu>
                    </MenuIcon>
                </WrapBnt>
            </TableCell>
        </TableRow>
    )
}

export default UserItem
