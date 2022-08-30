import {ChangeEvent} from "react";

export interface Props {
    subOptions: { type: 'numerical' | 'text', values?: string[] };
    handleBackArrow: () => void;
    // animate?: boolean;
    handleSubFilter: (event: ChangeEvent<HTMLInputElement>, isChecked: boolean) => void;
    handleCustomFilter?: (min: number, max: number) => void;
    filterValues?: string[];
    min?: number;
    max?: number;
}
