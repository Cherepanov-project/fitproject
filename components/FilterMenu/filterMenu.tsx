import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

import { Container, Title, ButtonList } from "@/components/FilterMenu/filterMenu.styles"

import SortFilter from "@/components/FilterMenu/sortFilter"
import Filter from "@/components/FilterMenu/filter"

import { IFilterBtnProps } from "./filterMenu.interface"

import { recipeSortingFilters, workoutSortingFilters } from "@/models/filterSorting/filters"
import { sorting } from "@/utils/sorting"

const FilterMenu: React.FC<IFilterBtnProps> = ({ title, data, sortedD, updateData }) => {
    const { asPath } = useRouter()
    let path = asPath.split("/").pop()
    
    const [ activeSorting, setActiveSorting ] = useState(["No Sorting"])
    const [ sortedData, setSortedData] = useState([...data])
    const [ sortingNames, setSortingNames ] = useState([])
    const [ filteredData, setfilteredData ] = useState([...sortedD])
    
    useEffect(() => {
        if (path === "recipes") {
            setSortingNames(recipeSortingFilters)
        }
        if (path === "workouts") {
            setSortingNames(workoutSortingFilters)
        }
      }, [path]);
    
    const changeSorting = (newSorting, direction) => {
        let sorted = []
        setActiveSorting(newSorting)
        let sortValue = sortingNames.find(element => element.name === newSorting).sorting
        sorted = sorting(filteredData, sortValue, direction, [...data]);
        setSortedData([...sorted])
        updateData([...sorted])
    }

    return (
        <Container>
            <Title>{title}</Title>
            <ButtonList>
                <SortFilter filterNames={sortingNames} activeSorting={activeSorting} changeSorting={changeSorting}/>
                <Filter data={data} sortedD={sortedD} updateData={updateData}/>
            </ButtonList>
        </Container>
    )
}

export default FilterMenu
