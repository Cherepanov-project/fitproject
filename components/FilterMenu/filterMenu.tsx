import React, { useState } from "react"
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

const FilterMenu: React.FC<IFilterBtnProps> = ({ title, data, sortedD, updateData }) => {
    const { asPath } = useRouter()
    let path = asPath.split("/").pop()
    
    const [ activeSorting, setActiveSorting ] = useState(["No Sorting"])
    const [sortedData, setSortedData] = useState([...data])

    let filterNames = []
    if (path === "recipes") {
        //filterNames move to models? 
        filterNames = [
        {
            name: "No Sorting",
            sorting: "none"
        },
        {
            name: "Calories",
            sorting: "calorie"
        },
        {
            name: "Protein",
            sorting: "protein"
        },
        {
            name: "Carbohydrates",
            sorting: "carbohydrate"
        },
        {
            name: "Fat",
            sorting: "fat"
        },
        {
            name: "Name",
            sorting: "name"
        }
    ]}
    let unSorted = [...sortedD];
    let sorted = []
    const changeSorting = (newSorting, direction) => {
        setActiveSorting(newSorting)
        let sortValue = filterNames.find(element => element.name === newSorting).sorting
        sorted = sorting(unSorted, sortValue, direction);
        setSortedData(sorted)
        updateData(sorted)
    }
    //sorting move to utils? 
    const sorting = (array, sortby, direction = 'none') => {
        if (sortby === 'none') {
            return data;
        }

        if (sortby === 'name' && direction === 'increase') {
            return array.sort((a, b) => a[sortby].localeCompare(b[sortby]))
        } else if (sortby === 'name' && direction === 'decrease') {
            return array.sort((a, b) => a[sortby].localeCompare(b[sortby])).reverse()
        }

        if (direction === 'decrease') {
            return array.sort((a, b) => {
                return b[sortby] - a[sortby];
            })
        } else if (direction === 'increase') {
            return array.sort((a, b) => {
                return a[sortby] - b[sortby];
            });
        }
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

//<ItemFilter />