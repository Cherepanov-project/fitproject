import React, { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

// ui libs
import { IconButton } from "@mui/material"

// styles
import { Container, Title, ButtonList, ButtonSort } from "@/components/FilterMenu/filterMenu.styles"

// images
import { imageSort } from "@/common/images/filterMenu"

//components
import ItemFilter from "@/components/FilterMenu/itemFilter"
import SortFilter from "@/components/FilterMenu/sortFilter"
import Filter from "@/components/FilterMenu/filter"

// interfaces
import { IFilterBtnProps } from "./filterMenu.interface"

//models
import { recipeFilters } from "@/models/filerSorting/filters"
import { sorting } from "@/utils/sorting"

const FilterMenu: React.FC<IFilterBtnProps> = ({ title, data, sortedD, updateData }) => {
    const { asPath } = useRouter()
    let path = asPath.split("/").pop()
    
    const [ activeSorting, setActiveSorting ] = useState(["No Sorting"])
    const [ sortedData, setSortedData] = useState([...data])
    const [ filterNames, setFilterNames ] = useState([])
    const [ unSorted, setUnsorted ] = useState([...sortedD])
    
    useEffect(() => {
        if (path === "recipes") {
            setFilterNames(recipeFilters)
        }
      }, []);
    
    const changeSorting = (newSorting, direction) => {
        let sorted = []
        setActiveSorting(newSorting)
        let sortValue = filterNames.find(element => element.name === newSorting).sorting
        sorted = sorting(unSorted, sortValue, direction, [...data]);
        setSortedData(sorted)
        updateData(sorted)
    }

    return (
        <Container>
            <Title>{title}</Title>
            <ButtonList>
                <SortFilter filterNames={filterNames} activeSorting={activeSorting} changeSorting={changeSorting}/>
                <Filter data={data} sortedD={sortedD} updateData={updateData}/>
            </ButtonList>
        </Container>
    )
}

export default FilterMenu
