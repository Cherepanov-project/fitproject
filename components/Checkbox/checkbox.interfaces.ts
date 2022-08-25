import {ChangeEvent} from "react";

export interface Props {
    checkbox: string;
    handleSubFilter: (event?: ChangeEvent<HTMLInputElement>) => void;
    sort?: boolean;
}