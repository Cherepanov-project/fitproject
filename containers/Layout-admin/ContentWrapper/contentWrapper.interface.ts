import { FilterOptions, IFilters, SortingOption } from "@/models/filterSorting/filters";

export interface IConfigsPage {
    filterOptions: FilterOptions,
    filterSubOptions: IFilters,
    sort: SortingOption,
    method: <T>() => T,
    key: string,
    title: string,
    Component: any,
}