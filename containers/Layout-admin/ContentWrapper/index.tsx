import React from "react";
import { useRouter } from "next/router";
import {
    articlesFilterOptions,
    articlesSortingFilters,
    articlesSubOptions,
    recipeFilterOptions,
    recipeSortingFilters,
    recipeSubOptions,
    workoutFilterOptions,
    workoutSortingFilters,
    workoutSubOptions
} from "@/models/filterSorting/filters";
import { getWorkoutList } from "@/API/workouts";
import { getRecipesList } from "@/API/recipes";
import TableItemWorkouts from "@/components/TableItemWorkouts/tableItemWorkouts";
import TableItemArticles from "@/components/TableItemArticles/tableItemArticles";
import TableItemRecipes from "@/components/TableItemRecipes/tableItemRecipes";
import { getArticlesList } from "@/API/articles";
import DataWrapper from "@/containers/Layout-admin/DataWrapper";
import { StyleContentList } from "@/styles/admin/recipes/recipes.styles";

const ContentWrapper = () => {
    const {asPath} = useRouter()
    let path = asPath.split("/").pop()

    const configs = {
        workouts: {
            filterOptions: workoutFilterOptions,
            filterSubOptions: workoutSubOptions,
            sort: workoutSortingFilters,
            method: getWorkoutList,
            key: "workoutsList",
            title: 'Workouts',
            Component: (props) => <TableItemWorkouts {...props} />,
        },
        articles: {
            filterOptions: articlesFilterOptions,
            filterSubOptions: articlesSubOptions,
            sort: articlesSortingFilters,
            method: getArticlesList,
            key: "workoutsList",
            title: 'Articles',
            Component: (props) => <TableItemArticles {...props} />,
        },
        recipes: {
            filterOptions: recipeFilterOptions,
            filterSubOptions: recipeSubOptions,
            sort: recipeSortingFilters,
            method: getRecipesList,
            key: "recipesList",
            title: 'Recipes',
            Component: (props) => <TableItemRecipes {...props}/>,
        }
    }

    return (
        <StyleContentList>
            <DataWrapper config={configs[path]}/>
        </StyleContentList>
    )

}

export default ContentWrapper