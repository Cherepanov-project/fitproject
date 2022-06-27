import { FC, useState } from "react"
import {
    TableRow,
    TableCell,
    Avatar,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import EditIcon from "@mui/icons-material/Edit"
import { SecondaryText, Text, RowAvatar, WrapBnt } from "./UserItem.style"
import avatarUser from "./images/avatarUser.jpg"
import Image from "next/image"
import ColorfulTeg from "../../common/ColorfulTeg"
import { format } from "date-fns"
import { MenuIcon } from "../FilterBtn/stylesContent"

interface UserItemProps {
    nameUser: string
    avatar?: string
    dateRegistor: string
    role: string
    email: string
    sex: string
}

const options = ["Delete", "Edit"]

const UserItem: FC<UserItemProps> = ({
    nameUser,
    dateRegistor,
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
                <Text>{format(new Date(dateRegistor), "MMM LL, u")}</Text>
                <SecondaryText>
                    {format(new Date(dateRegistor), "h:mm aaa")}
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