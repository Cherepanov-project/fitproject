import React, { FC, useState } from "react";
import Sort from "@/components/Sort";
import Filter from "@/components/Filter";
import { ListPage } from "@/components/ListPage";
import Image from "next/image";
import { imageFilter, imageSort } from "@/common/images/filterMenu";
import { IProps } from "@/components/SortAndFilter/sortAndFilter.interface";
import { StyleBlockButtons, StyleButton, StyleHeader, Title } from "./sortAndFilter.styles";

const SortAndFilter: FC<IProps> = ({config: {title, sort, filterOptions, filterSubOptions, Component}, data, updateList}) => {

    const [processSort, setProcessSort] = useState({});
    const [processFilter, setProcessFilter] = useState({...filterSubOptions})
    const [isActiveSort, setIsActiveSort] = useState(false)
    const [isActiveFilter, setIsActiveFilter] = useState(false)

    const changeFilterData = (key: string, value: string | [number, number]) => {
        if (typeof value === 'string') {
            processFilter[key][value] = !processFilter[key][value]
            setProcessFilter({...processFilter})
        } else {
            processFilter[key] = value;
            setProcessFilter({...processFilter})
        }
    }

    const changeSortData = (stop: boolean, key?: string, type?: 'increase' | 'decrease') => {
        if (!stop) {
            setProcessSort({[key]: type})
        } else {
            setProcessSort({})
        }
    }

    return (
        <>
            <StyleHeader>
                <Title>{title}</Title>
                <StyleBlockButtons>
                    <StyleButton onClick={() => setIsActiveSort(!isActiveSort)}>
                        <Image src={imageSort} alt="sort"/>
                        Sort
                    </StyleButton>
                    {isActiveSort ? <Sort sortSelect={sort} changeSortData={changeSortData} /> : null}
                    <StyleButton onClick={() => {
                        setIsActiveFilter(!isActiveFilter)
                    }}>
                        <Image src={imageFilter} alt="image-filter"/>
                        Filter
                    </StyleButton>
                    {isActiveFilter ? (<Filter data={data} subOptions={processFilter} options={filterOptions}
                             changeFilterData={changeFilterData}/>) : null}
                </StyleBlockButtons>
            </StyleHeader>
            <ListPage updateList={updateList} Component={Component} data={data} processData={{filter: processFilter, sort: processSort }}/>
        </>
    )
}

export default SortAndFilter