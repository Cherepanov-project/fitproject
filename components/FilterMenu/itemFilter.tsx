import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import IconButton from "@mui/material/IconButton"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

import imageFilter from "../../common/images/filterMenu/filter.svg"
import { ContainerRight, FilterItem } from "./itemFilter.styles"
import { Aa, Dropdown, FilterItem2, ContainerCenter, IconBack, InputCheckbox } from "./filterMenu.styles"

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
