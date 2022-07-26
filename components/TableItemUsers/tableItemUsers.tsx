import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

// help libs
import { format } from "date-fns"

// ui libs
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

// styles
import {
    SecondaryText,
    Text,
    RowAvatar,
    WrapBnt,
} from "./tableItemUsers.styles"
import { MenuIcon } from "../FilterMenu/filterMenu.styles"

// images
import avatarUser from "@/common/images/userTableItem/avatarUser.jpg"

// components
import ColorfulTeg from "../ColorfulTeg"
import ConfirmAction from "../ConfirmAction/confirmAction"

// types
import { IUser } from "../PageComponents/PageUsers/pageUsers.interface"

// API
import { deleteUserById } from "@/API/users"

const options = ["View profile", "Delete"]

const TableItemUsers: React.FC<IUser> = props => {
    const {
        id,
        username,
        firstName,
        lastName,
        email,
        phone,
        age,
        gender,
        coach,
        avatar = avatarUser,
    } = props

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    const deleteUser = async () => {
        const response = await deleteUserById(id)
        handleClose()
    }
    return (
        <>
            <TableCell sx={{ paddingLeft: 3.5, display: "flex", padding: 1 }}>
                <Avatar sx={{ margin: 2 }}>
                    <Image src={avatar} alt="avatar" />
                </Avatar>
                <RowAvatar>
                    <Text>ID:</Text>
                    <SecondaryText>{id}</SecondaryText>
                </RowAvatar>
            </TableCell>
            <TableCell sx={{ paddingLeft: 3.5, padding: 1 }}>
                <Text>User Name</Text>
                <SecondaryText>{username}</SecondaryText>
            </TableCell>
            <TableCell sx={{ paddingLeft: 3.5, paddingTop: 1 }}>
                <Text>Registration</Text>
                <Text>{format(new Date(), "MMM LL, u")}</Text>
                <SecondaryText>{format(new Date(), "h:mm aaa")}</SecondaryText>
            </TableCell>

            <TableCell sx={{ paddingLeft: 3.5, paddingTop: 1, lineHeight: 1 }}>
                <WrapBnt>
                    {/* {role === "admin" ? (
                        <ColorfulTeg text={role} backgroundColor="#F12B2C" />
                    ) : (
                        <ColorfulTeg text={role} />
                    )}*/}
                    {coach ? (
                        <ColorfulTeg text="Coach" backgroundColor="#F12B2C" />
                    ) : (
                        <ColorfulTeg text="User" />
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
                                            onConfirm={deleteUser}
                                        >
                                            <DeleteForeverIcon />
                                        </ConfirmAction>
                                    ) : (
                                        <Link
                                            href={{
                                                pathname: `/admin/users/${id}`,
                                                query: {
                                                    data: JSON.stringify(props),
                                                },
                                            }}
                                            passHref
                                        >
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

export default TableItemUsers
