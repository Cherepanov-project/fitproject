import React, { useState } from "react"
import { useQuery } from "react-query"
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

import { MenuIcon, StyledText, StyledSecondaryText } from "./tableItemRecipes.styles"
import imageMan from "@/common/images/recipesTableItem/avatarEat.svg"
import ColorfulTeg from "../ColorfulTeg"
import { deleteRecipeById } from "@/API/recipes"

const options = ["Delete", "Edit"]

const TableItemRecipes = ({
    status,
    name,
    calorie,
    fat,
    protein,
    carbohydrate,
    portionSize,
    id,
    updateList
}) => {
    const router = useRouter()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    /*const {data, error, refetch} = useQuery(["deleteRecipe", id], () => deleteRecipeById(id), {
        refetchOnWindowFocus: false,
        enabled: false,
        retry: false,
        onSuccess: updateList
    })
    if (error instanceof Error) {
        return <h1>{error.message}</h1>
    }*/

    const handleDelete = async () => {
        //const response = await deleteRecipeById(id)
        handleClose()
        //updateList()
        //refetch()
    }
    const handleOpenRecipe = () => {
        router.push(`/admin/recipes/${id}`)
    }

    return (
        <>
            <TableCell
                component="td"
                scope="row"
                sx={{ display: "flex", paddingLeft: 3.5 }}
            >
                <Avatar sx={{ margin: 2 }}>
                    <Image src={imageMan} alt="image-man" />
                </Avatar>
                <StyledSecondaryText>
                portion size ({portionSize}g), fat ({fat}), protein ({protein}),
                carbohydrates ({carbohydrate})
                </StyledSecondaryText>
            </TableCell>
            <TableCell sx={{ paddingLeft: 3.5 }} onClick={handleOpenRecipe} ><StyledText>{name}</StyledText></TableCell>
            <TableCell sx={{ paddingLeft: 3.5 }}>{calorie} calorie</TableCell>
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
            <TableCell align="right" sx={{ borderTop: "1px solid rgba(224, 224, 224, 1)" }}>
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
                                        onClick={handleDelete}
                                    />
                                ) : (
                                    <Link
                                        href={`/admin/recipes/edit-recipe/${id}`}
                                        passHref
                                    >
                                        <EditIcon />
                                    </Link>
                                )}
                            </MenuItem>
                        ))}
                    </Menu>
                </MenuIcon>
            </TableCell>
        </ >
    )
}

export default TableItemRecipes
