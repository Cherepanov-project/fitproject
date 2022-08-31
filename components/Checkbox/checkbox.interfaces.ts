import {ChangeEvent} from "react";

export interface Props {
    checkbox: string;
    handleSubFilter: (event: ChangeEvent<HTMLInputElement>, isChecked: boolean) => void;
    isChecked: boolean;
}