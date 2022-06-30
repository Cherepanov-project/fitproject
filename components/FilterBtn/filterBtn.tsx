import React from "react"
import Image from "next/image"
import { IconButton } from "@mui/material"

import { Container, Title, ButtonList, ButtonSort } from "./ContentStyles"
import imageSort from "./images/sort.svg"
import ItemFilter from "./ItemFilter"

interface IFilterBtnProps {
    title: string
}

const FilterBtn: React.FC<IFilterBtnProps> = ({ title }) => {
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

export default FilterBtn
