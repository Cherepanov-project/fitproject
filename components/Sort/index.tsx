import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { articlesSortingFilters, recipeSortingFilters, workoutSortingFilters } from "@/models/filterSorting/filters";
import { ButtonSort, Dropdown, StyledInput, StyledLabel } from "@/components/FilterMenu/sortFilter.styles";
import Image from "next/image";
import { imageSort, imageDescending, imageAscending } from "@/common/images/filterMenu";
import Props from "@/components/Sort/sort.interfaces";
import { StyleBlockButtons, StyleButton, StyleLabel } from "@/components/Sort/sort.styles";

// const CheckPathForSort = (Component) => {
//     return function Hoc(props) {
//         const {asPath} = useRouter()
//         let path = asPath.split("/").pop()
//         const [sortingOptions, setSortingNames] = useState([])
//
//         useEffect(() => {
//             if (path === "recipes") {
//                 setSortingNames(recipeSortingFilters)
//             }
//             if (path === "workouts") {
//                 setSortingNames(workoutSortingFilters)
//             }
//             if (path === 'articles') {
//                 setSortingNames(articlesSortingFilters)
//             }
//         }, [path])
//
//         return (
//             <Component {...props} sortingOptions={sortingOptions}/>
//         )
//     }
// }

const Sort = ({ sortSelect, changeSortData }) => {
    const [noSort, setNoSort] = useState<boolean>(true)
    // const [menuActive, setMenuActive] = useState<boolean>(false)

    const handleClick = (value, type) => {
        setNoSort(false)
        changeSortData(false, value, type)
    }

    const sortValues = sortSelect.map(filter => {
        return (
            <StyleLabel key={filter.name}>
                <span>{filter.name}</span>
                <StyleBlockButtons>
                    <StyleButton>
                        <Image src={imageDescending} alt="Sort Descending" onClick={() => {
                            handleClick(filter.sorting, 'decrease')
                        }}/>
                    </StyleButton>
                    <StyleButton>
                        <Image src={imageAscending} alt="Sort Ascending" onClick={() => {
                            handleClick(filter.sorting, 'increase')
                        }}/>
                    </StyleButton>
                </StyleBlockButtons>
            </StyleLabel>
        )
    })
    return (
        <>
            {/*<ButtonSort onClick={() => setMenuActive(!menuActive)}>*/}
            {/*    <Image src={imageSort} alt="sort"/>*/}
            {/*    Sort*/}
            {/*</ButtonSort>*/}
            {/*{menuActive && (*/}
                <Dropdown>
                    <StyledLabel key="noSorting">
                        <StyledInput name="noSorting" type="checkbox" checked={noSort} onChange={() => {
                            setNoSort(true)
                            changeSortData(true)
                        }}/>
                        <span>No sorting</span>
                    </StyledLabel>
                    {sortValues}
                </Dropdown>
        </>
    )
}

export default Sort