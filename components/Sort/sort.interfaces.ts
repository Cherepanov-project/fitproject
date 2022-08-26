interface Sort {
    name: string;
    sorting: string;
}

export type SortType = 'decrease' | 'increase'

export default interface Props {
    sortingOptions: Sort[];
    data: any;
    startSort: (value: string, type: SortType) => void;
    stopSort: () => void;
}