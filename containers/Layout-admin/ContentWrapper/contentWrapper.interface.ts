import { FilterOptions, IFilters, SortingOption } from "@/models/filterSorting/filters";

export interface IConfigsPage {
    filterOptions: FilterOptions,
    filterSubOptions: IFilters,
    sort: SortingOption,
    method: any,
    key: string,
    title: string,
    Component: any,
}