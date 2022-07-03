import { FC } from "react"
import Image from "next/image"
import { IconButton } from "@mui/material"

import { Container, Title, ButtonList, ButtonSort } from "./content.styles"
import imageSort from "./images/sort.svg"
import ItemFilter from "./itemFilter"

interface IFilterBtnProps {
    title: string
}

const FilterMenu: FC<IFilterBtnProps> = ({ title }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <ButtonList>
                {/* <IconButton></IconButton> */}
                <ButtonSort>
                    <Image src={imageSort} />
                    Sort
                </ButtonSort>
                <ItemFilter />
            </ButtonList>
        </Container>
    )
}

export default FilterMenu
