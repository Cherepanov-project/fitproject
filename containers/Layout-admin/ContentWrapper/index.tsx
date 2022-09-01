import {useRouter} from "next/router";
import React, {useEffect, useMemo, useState} from "react";
import {useQuery} from "react-query";
import {getRecipesList} from "@/API/recipes";
import {SortType} from "@/components/Sort/sort.interfaces";
import {filtering} from "@/utils/filtering";
import {sorting} from "@/utils/sorting";
import {StyleContentList, StyleFooterRecipes, StyleLoaderContainer} from "@/styles/admin/recipes/recipes.styles";
import CircularProgress from "@mui/material/CircularProgress";
import {StyleBlockButtons, StyleHeader} from "@/styles/admin/articles/articles.styles";
import {Title} from "@/components/FilterMenu/filterMenu.styles";
import Sort from "@/components/Sort";
import Filter from "@/components/Filter";
import CreateForm from "@/components/AddBtn/addForm";
import Pagination from "@/components/Table/tablePagination";

export const ContentWrapper = (Component) => {
    return function Hoc(props) {
        const {asPath} = useRouter()
        let path = asPath.split("/").pop()
        const [sendRequest, setSendRequest] = useState('')
        const [listChange, setListChange] = useState<boolean>(false)
        const [data, setData] = useState([])
        const [changingData, setChangingData] = useState({sort: {}, filter: {}})
        const [sort, setSort] = useState(false) //isVisibleSortMenu
        const [filter, setFilter] = useState(false)
        const [page, setPage] = useState<number>(0)
        const [rowsPerPage, setRowsPerPage] = useState<number>(8)

        const {isLoading, error} = useQuery([sendRequest, listChange], getRecipesList, {
            onSuccess: (data) => {
                setData(data)
            }
        })

        useEffect(() => {
            if (path === "recipes") {
                setSendRequest("recipesList")
            }
            if (path === "workouts") {
                setSendRequest("workoutsList")
            }
            // if (path === 'articles') {
            //     setSendRequest("workoutsList")
            // }
        }, [path]);

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [page, rowsPerPage]);

        const startSort = (value: string, type: SortType) => {
            const newObj = {value, type}
            setChangingData({
                ...changingData,
                sort: newObj
            })
            setSort(true)
        }

        const stopSort = () => {
            setChangingData({
                ...changingData,
                sort: {}
            })
            setSort(false)
        }
        const startFilter = (value: string, subValue: string | string[], type: 'numerical' | 'text' = 'text') => {
            setFilter(true);
            const currFilterObj = changingData.filter
            if (type === 'numerical' && Array.isArray(subValue)) {
                const newObj = {
                    ...currFilterObj,
                    [value]: [...subValue]
                }
                setChangingData({
                    ...changingData,
                    filter: newObj
                })
            }
            if (type === 'text') {
                const newObj = {
                    ...currFilterObj,
                    [value]: currFilterObj[value] ? [...currFilterObj[value], subValue] : [subValue]
                }
                setChangingData({
                    ...changingData,
                    filter: newObj
                })
            }
        }

        const deleteFilter = (value: string, subValue: string) => {
            const currFilterObj = changingData.filter
            const newObj = {
                ...currFilterObj,
                [value]: currFilterObj[value].filter((el) => el !== subValue)
            }
            setChangingData({
                ...changingData,
                filter: newObj
            })
        }

        const memoData = useMemo(() => {
            let filterData = filtering(data, changingData.filter)
            if (sort) {
                filterData = sorting(filterData, changingData.sort.value, changingData.sort.type)
            }
            return filterData;
        }, [changingData])

        const handleChangePage = (event: unknown, newPage: number) => {
            setPage(newPage)
        }

        const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
            setRowsPerPage(+event.target.value)
            setPage(0)
        }

        if (error instanceof Error) {
            throw new Error(error.message)
            //return <h1>{error.message}</h1>
        }
        if (isLoading || data.length === 0) {
            return (
                <StyleLoaderContainer>
                    <CircularProgress></CircularProgress>
                </StyleLoaderContainer>
            )
        }
        const updateList = () => {
            const isChanged = listChange;
            setListChange(!isChanged);
        }

        return (
            <StyleContentList>
                <StyleHeader>
                    <Title>Recipes</Title>
                    <StyleBlockButtons>
                        <Sort data={data} sortedData={data} startSort={startSort} stopSort={stopSort}/>
                        <Filter filterSelect={changingData.filter} deleteFilter={deleteFilter} startFilter={startFilter} data={data}/>
                    </StyleBlockButtons>
                </StyleHeader>
                <Component page={page} rowsPerPage={rowsPerPage} memoData={memoData} data={data} updateList={updateList}></Component>
                <StyleFooterRecipes>
                    <CreateForm/>
                    <Pagination
                        count={memoData.length ? memoData.length : data.length}
                        page={page}
                        onChangePage={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </StyleFooterRecipes>
            </StyleContentList>
        )
    }
}