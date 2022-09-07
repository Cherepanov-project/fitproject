export interface IProps {
    subOptions: {
        [key: string]: boolean
    };
    handleFilter: (value: string) => void;
}
