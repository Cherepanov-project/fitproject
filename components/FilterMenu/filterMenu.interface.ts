export interface IFilterBtnProps {
    title: string
    data?: Array<IFilterData>
    updateData(newData:Array<IFilterData> ): void
}

export interface IFilterItemActiveProp {
    filterItemActive: boolean
}

export interface IFilterData {
    id: number
    [propName: string]: any;
}