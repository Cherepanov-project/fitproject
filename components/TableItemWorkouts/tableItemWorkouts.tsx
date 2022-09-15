import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import Avatar from "@mui/material/Avatar"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import EditIcon from "@mui/icons-material/Edit"

import { MenuIcon, StyledSecondaryText, StyledText } from "./tableItemWorkouts.styles"
import imageMan from "@/common/images/recipesTableItem/avatarEat.svg"
import ColorfulTeg from "../ColorfulTeg"
import { deleteWorkoutById } from "@/API/workouts"

const options = ["Delete", "Edit"]

const TableItemWorkouts = ({
    updateList,
    element,
    item: {
        status = 'HIGH',
        name,
        repeatCount,
        approachCount,
        area,
        category,
        id,
    }
}) => {
    const router = useRouter()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    const handleDelete = async () => {
        const response = await deleteWorkoutById(id)
        handleClose()
        updateList()
    }
    const handleOpenWorkout = () => {
        router.push({
                pathname: `/admin/workouts/${id}`,
                query: {data: JSON.stringify(element)},
            },
            {
                pathname: `/admin/workouts/${id}`,
            })
    }
    return (
        <TableRow hover sx={{cursor: "pointer"}}>
            <TableCell
                component="th"
                scope="row"
                sx={{display: "flex", paddingLeft: 1.5}}
            >
                <Avatar sx={{margin: 2}}>
                    <Image src={imageMan} alt="image-man"/>
                </Avatar>
                <StyledSecondaryText>
                    repeat count ({repeatCount}), approach count ({approachCount}), area ({area}),
                    category ({category})
                </StyledSecondaryText>
            </TableCell>
            <TableCell sx={{paddingLeft: 3.5}} onClick={handleOpenWorkout}><StyledText>{name}</StyledText></TableCell>
            <TableCell sx={{paddingLeft: 3.5}}>{category}</TableCell>
            <TableCell sx={{paddingLeft: 3.5}}>
                {status === "HIGH" ? (
                    <ColorfulTeg text={status} backgroundColor="#F12B2C"/>
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
            <TableCell align="right" sx={{borderTop: "1px solid rgba(224, 224, 224, 1)"}}>
                <MenuIcon>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon/>
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
                                        onClick={handleDelete}
                                    />
                                ) : (
                                    <Link
                                        href={`/admin/workouts/edit-workout/${id}`}
                                        passHref
                                    >
                                        <EditIcon/>
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

export default TableItemWorkouts
