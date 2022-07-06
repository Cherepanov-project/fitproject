import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import PersonIcon from "@mui/icons-material/Person"
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
import avatarUser from "../../common/images/userTableItem/avatarUser.jpg"
import ColorfulTeg from "../ColorfulTeg"
import { MenuIcon } from "../FilterMenu/filterMenu.styles"
import ConfirmAction from "../ConfirmAction/confirmAction"
import { IUserItemProps } from "./userItem.interface"

const options = ["View profile", "Delete"]

const UserItem: React.FC<IUserItemProps> = ({
    nameUser,
    dateRegister,
    email,
    role,
    gender,
    avatar = avatarUser,
    id,
}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    const deleteArticle = () => {
        handleClose()
        // функция для удаленея + вызвать перерисовку если прошло успешно
        console.log("delete")
    }
    return (
        <>
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
                <SecondaryText>{gender}</SecondaryText>
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
                                >
                                    {option === "Delete" ? (
                                        <ConfirmAction
                                            text="delete user?"
                                            onConfirm={deleteArticle}
                                        >
                                            <DeleteForeverIcon />
                                        </ConfirmAction>
                                    ) : (
                                        <Link href={`/admin/users/${id}`}>
                                            <PersonIcon />
                                        </Link>
                                    )}
                                </MenuItem>
                            ))}
                        </Menu>
                    </MenuIcon>
                </WrapBnt>
            </TableCell>
        </>
    )
}

export default UserItem
