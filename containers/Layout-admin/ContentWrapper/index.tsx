import { useRouter } from "next/router";
import {
    articlesFilterOptions, articlesSubOptions,
    workoutFilterOptions,
    workoutSortingFilters,
    workoutSubOptions
} from "@/models/filterSorting/filters";
import { getWorkoutList } from "@/API/workouts";
import { StyleContentList } from "@/styles/admin/recipes/recipes.styles";
import React from "react";
import SortAndFilter from "@/components/SortAndFilter";

const ContentWrapper = () => {
    const {asPath} = useRouter()
    let path = asPath.split("/").pop()
    const configs = {
        workouts: {
            filter: {options: workoutFilterOptions, subOptions: workoutSubOptions},
            sort: workoutSortingFilters,
            method: getWorkoutList,
            key: "workoutsList",
            title: 'Workouts'
        },
        articles: {
            filters: {options: articlesFilterOptions, subOptions: articlesSubOptions},
            sort: workoutSortingFilters,
            title: 'Articles'
        }
    }

    return (
        <StyleContentList>
            <SortAndFilter config={configs[path]}/>
        </StyleContentList>
    )

}

export default ContentWrapper