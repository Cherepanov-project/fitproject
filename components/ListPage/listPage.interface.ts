import { IData } from "@/containers/Layout-admin/DataWrapper/dataWrapper.interface";
import { IFilters } from "@/models/filterSorting/filters";

type SortType = 'increase' | 'decrease'

interface ISort {
    [key: string]: SortType
}

interface IProcessData {
    sort: ISort;
    filter: IFilters
}

export interface IProps {
    Component: any;
    data: IData[];
    processData: IProcessData;
    updateList: () => void;
}