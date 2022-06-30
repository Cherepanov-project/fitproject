import React from "react"
import Image from "next/image"
import { IconButton } from "@mui/material"

import { Container, Title, BtnsList, ButtonSort } from "./stylesContent"
import imageSort from "./images/sort.svg"
import ItemFilter from "./itemFilter"

interface IFilterBtnProps {
    title: string
}

const FilterBtn: React.FC<IFilterBtnProps> = ({ title }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <BtnsList>
                {/* <IconButton></IconButton> */}
                <ButtonSort>
                    <Image src={imageSort} />
                    Sort
                </ButtonSort>
                <ItemFilter />
            </BtnsList>
        </Container>
    )
}

export default FilterBtn
