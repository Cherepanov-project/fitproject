import React from "react"
import { MenuIcon } from "./recipies"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import Image from "next/image"
import imageMan from "./images/avatarEat.svg"
import Avatar from "@mui/material/Avatar"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import EditIcon from "@mui/icons-material/Edit"
import Link from "next/link"
import ColorfulTeg from "../../ColorfulTeg"

const options = ["Delete", "Edit"]

const Recipie = ({
    status,
    name,
    calories,
    fats,
    proteins,
    carbohydrates,
    portionSize,
    dishType,
    id,
}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
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
            <TableCell
                component="th"
                scope="row"
                sx={{ display: "flex", paddingLeft: 3.5 }}
            >
                <Avatar sx={{ margin: 2 }}>
                    <Image src={imageMan} />
                </Avatar>
                portion size ({portionSize}g), fat ({fats}), proteins (
                {proteins}), carbohydrates ({carbohydrates})
            </TableCell>
            <TableCell sx={{ paddingLeft: 3.5 }}>{name}</TableCell>
            <TableCell sx={{ paddingLeft: 3.5 }}>{calories} calories</TableCell>
            <TableCell sx={{ paddingLeft: 3.5 }}>
                {status === "HIGH" ? (
                    <ColorfulTeg text={status} backgroundColor="#F12B2C" />
                ) : status === "LOW" ? (
                    <ColorfulTeg
                        text={status}
                        backgroundColor="#FEC400
                    "
                    />
                ) : (
                    <ColorfulTeg
                        text={status}
                        backgroundColor="#29CC97
                "
                    />
                )}
            </TableCell>
            <TableCell align="right">
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
                                    <Link href={`/admin/edit-${id}`}>
                                        <EditIcon />
                                    </Link>
                                )}
                            </MenuItem>
                        ))}
                    </Menu>
                </MenuIcon>
            </TableCell>
        </TableRow>
    )
}

export default Recipie
