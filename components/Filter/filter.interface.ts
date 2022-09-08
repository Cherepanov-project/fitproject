import { IData } from "@/containers/Layout-admin/DataWrapper/dataWrapper.interface";
import { FilterOptions, IFilters } from "@/models/filterSorting/filters";

export interface IProps {
    data: IData[];
    subOptions: IFilters;
    options: FilterOptions;
    changeFilterData: (key: string, value: string | [number, number]) => void;
}