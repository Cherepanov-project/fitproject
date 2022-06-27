import { FC } from "react"
import { Container, Title, BtnsList, ButtonSort } from "./stylesContent"
import Image from "next/image"
import { IconButton } from "@mui/material"
import imageSort from "./images/sort.svg"
import ItemFilter from "./itemFilter"

interface FilterBtnProps {
    title: string
}

const FilterBtn: FC<FilterBtnProps> = ({ title }) => {
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
