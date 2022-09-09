export interface IProps {
    limitValues: {min: number, max: number};
    subOptions: [number, number] | [];
    handleFilter: (value: string | [number, number]) => void;
}
