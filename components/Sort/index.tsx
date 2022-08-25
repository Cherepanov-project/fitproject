import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {articlesSortingFilters, recipeSortingFilters, workoutSortingFilters} from "@/models/filterSorting/filters";
import {ButtonSort, Dropdown, StyledInput, StyledLabel} from "@/components/FilterMenu/sortFilter.styles";
import Image from "next/image";
import {imageSort} from "@/common/images/filterMenu";
import Props from "@/components/Sort/sort.interfaces";
import Checkbox from "@/components/Checkbox";

const CheckPathForSort = (Component) => {
    return function Hoc(props) {
        const {asPath} = useRouter()
        let path = asPath.split("/").pop()
        const [sortingOptions, setSortingNames] = useState([])

        useEffect(() => {
            if (path === "recipes") {
                setSortingNames(recipeSortingFilters)
            }
            if (path === "workouts") {
                setSortingNames(workoutSortingFilters)
            }
            if (path === 'articles') {
                setSortingNames(articlesSortingFilters)
            }
        }, [path])

        return (
            <Component {...props} sortingOptions={sortingOptions}/>
        )
    }
}

const Sort: FC<Props> = ({sortingOptions}) => {
    const [noSort, setNoSort] = useState<boolean>(true)
    // const [ sortedData, setSortedData] = useState([...data])
    const [menuActive, setMenuActive] = useState<boolean>(false)

    const change = (e?: ChangeEvent<HTMLInputElement>) => {
        if (e) {
            setNoSort(false);
        } else {
            setNoSort(true)
        }
    }


    const sortValues = sortingOptions.map(filter => {
        // let isChecked = activeSorting.length === 0 ? false : activeSorting.includes(filter.name);
        return (
            <StyledLabel key={filter.name}>
                <Checkbox checkbox={filter.name} handleSubFilter={change} />
                <span>{filter.name}</span>
            </StyledLabel>
        )
    })
    return (
        <>
            <ButtonSort onClick={() => setMenuActive(!menuActive)}>
                <Image src={imageSort} alt="sort"/>
                Sort
            </ButtonSort>
            {menuActive && (<Dropdown>
                <StyledLabel key='noSorting'>
                    <StyledInput name='noSorting' type='checkbox' checked={noSort} onChange={change}/>
                    <span>No sorting</span>
                </StyledLabel>
                {sortValues}
            </Dropdown>)}
        </>
    )
}

export default CheckPathForSort(Sort)