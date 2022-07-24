import React from "react"
import Image from "next/image"

// ui libs
import { IconButton } from "@mui/material"

// styles
import { Container, Title, ButtonList, ButtonSort } from "./filterMenu.styles"

// images
import { imageSort } from "@/common/images/filterMenu"

//components
import ItemFilter from "./itemFilter"

// interfaces
import { IFilterBtnProps } from "./filterMenu.interface"

const FilterMenu: React.FC<IFilterBtnProps> = ({ title }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <ButtonList>
                {/* <IconButton></IconButton> */}
                <ButtonSort>
                    <Image src={imageSort} alt="sort" />
                    Sort
                </ButtonSort>
                <ItemFilter />
            </ButtonList>
        </Container>
    )
}

export default FilterMenu
