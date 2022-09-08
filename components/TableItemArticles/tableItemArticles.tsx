import React from "react";
import {deleteRecipeById} from "@/API/recipes";
import TableCell from "@mui/material/TableCell";
import Avatar from "@mui/material/Avatar";
import {
    MenuIcon,
    StyledImage,
    StyledText
} from "@/components/TableItemRecipes/tableItemRecipes.styles";
import Image from "next/image";
import imageMan from "@/common/images/recipesTableItem/avatarEat.svg";
import ColorfulTeg from "@/components/ColorfulTeg";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import {StyledBlock, StyledExtraText} from "./tableItemArticles.styles";
import {formatDistanceToNow, format} from "date-fns";
import { TableRow } from "@mui/material";

const options = ["Delete", "Edit"]

const TableItemArticles = ({ updateList, element, item: {
                                                      id,
                                                      created,
                                                      priority,
                                                      title,
                                                      username,
                                                      updated,
                                                      avatar
                                                  },
                                              }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const handleClick = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget)
    const open = Boolean(anchorEl)
    const handleClose = () => setAnchorEl(null)
    const dateCreated = formatDistanceToNow(new Date(updated), {includeSeconds: true});
    const date = format(new Date(created), 'PPP')
    const handleDelete = async () => {
        const response = await deleteRecipeById(id)
        handleClose()
        updateList()
    }

    return (
        <TableRow hover sx={{ cursor: "pointer" }}>
            <TableCell
                component="td"
                scope="row"
                sx={{display: "flex", paddingLeft: 3.5, width: '450px'}}
            >
                <Avatar sx={{margin: 2}}>
                    {avatar ? (<StyledImage src={avatar} alt="recipe-image"/>) : (
                        <Image src={imageMan} alt="image-man"/>)}
                </Avatar>
                <StyledBlock>
                    <StyledText>{title}</StyledText>
                    <StyledExtraText>Updated {dateCreated} ago</StyledExtraText>
                </StyledBlock>
            </TableCell>
            <TableCell sx={{paddingLeft: 3.5}}>
                <StyledBlock>
                    <StyledText>{username}</StyledText>
                    <StyledExtraText>On {new Date(created).getDate()}.{new Date(created).getMonth()}.{new Date(created).getFullYear()}</StyledExtraText>
                </StyledBlock>
            </TableCell>
            <TableCell sx={{paddingLeft: 3.5}}>
                <StyledBlock>
                    <StyledText>{date}</StyledText>
                    <StyledExtraText>{format(new Date(created), 'p')}</StyledExtraText>
                </StyledBlock>
            </TableCell>
            <TableCell sx={{paddingLeft: 3.5}}>
                {priority === "HIGH" ? (
                    <ColorfulTeg text={priority} backgroundColor="#F12B2C"/>
                ) : priority === "LOW" ? (
                    <ColorfulTeg
                        text={priority}
                        backgroundColor="#FEC400
                    "
                    />
                ) : (
                    <ColorfulTeg
                        text={priority}
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
        </TableRow>
    )
}

export default TableItemArticles