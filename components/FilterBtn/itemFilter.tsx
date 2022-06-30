import React, { useState } from "react"
import Image from "next/image"
import IconButton from "@mui/material/IconButton"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import styled from "styled-components"
import { useRouter } from "next/router"

import imageFilter from "./images/filter.svg"
import {
    Aa,
    Dropdown,
    FilterItem2,
    ContainerCenter,
    IconBack,
    InputCheckbox,
} from "./ContentStyles"

interface IFilterItemActiveProp {
    filterItemActive: boolean
}

const FilterItem = styled.div<IFilterItemActiveProp>`
    padding-right: 15px;
    transform: ${({ filterItemActive }) =>
        filterItemActive ? "translateX(-110%)" : "translateX(0%)"};
    transition: transform 0.5s ease;
`
const ContainerRight = styled.div<IFilterItemActiveProp>`
    margin-top: -130px;
    overflow: hidden;
    transform: ${({ filterItemActive }) =>
        filterItemActive ? "translateX(0%)" : "translateX(110%)"};
    transition: transform 0.5s ease;
`

const ItemFilter = () => {
    let filterList = []
    let optionsTypesMeals = []
    const { asPath } = useRouter()
    let path = asPath.split("/").pop()

    if (path === "recipes") {
        filterList = ["MealType", "Categories", "Calories"]
        optionsTypesMeals = ["Breakfast", "Lunch", "Dinner"]
    }

    if (path === "exercises") {
        console.log("exercises")
    }
    if (path === "articles") {
        console.log("articles")
    }

    const [menuFilterActive, setMenuFilterActive] = useState<boolean>(false)
    const [filterItemActive, setFilterItemActive] = useState<boolean>(false)

    const onFilterActive: React.MouseEventHandler<HTMLDivElement> = event => {
        setFilterItemActive(true)
    }

    const onIconBack: React.MouseEventHandler<HTMLDivElement> = event => {
        setFilterItemActive(false)
    }

    return (
        <div>
            <IconButton
                sx={{ fontSize: 14, fontWeight: 600, marginLeft: 5 }}
                onClick={() => setMenuFilterActive(!menuFilterActive)}
            >
                <Image src={imageFilter} alt="image-filter" />
                Filter
            </IconButton>
            {menuFilterActive ? (
                <Dropdown>
                    <ContainerCenter>
                        {filterList.map(option => (
                            <FilterItem
                                key={option}
                                filterItemActive={filterItemActive}
                                onClick={onFilterActive}
                            >
                                <Aa href="#">
                                    {option}
                                    <ArrowForwardIosIcon
                                        sx={{
                                            height: 15,
                                            marginTop: 1.5,
                                            marginLeft: "auto",
                                            marginRight: 0,
                                        }}
                                    />
                                </Aa>
                            </FilterItem>
                        ))}
                    </ContainerCenter>
                    <ContainerRight filterItemActive={filterItemActive}>
                        <IconBack onClick={onIconBack}>
                            <ArrowBackIcon
                                sx={{ width: 20, verticalAlign: "middle" }}
                            />
                        </IconBack>
                        {optionsTypesMeals.map(option => (
                            <FilterItem2
                                // filterItemActive={filterItemActive}
                                key={option}
                            >
                                <InputCheckbox
                                    type="checkbox"
                                    id={option}
                                    name="subscribe"
                                    value="option"
                                />
                                <label htmlFor={option}>{option}</label>
                            </FilterItem2>
                        ))}
                    </ContainerRight>
                </Dropdown>
            ) : null}
        </div>
    )
}

export default ItemFilter
