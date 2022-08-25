import {ChangeEvent} from "react";

export interface Props {
    subOptions: string[] | undefined;
    handleBackArrow: () => void;
    animate: boolean;
    handleSubFilter: (event?: ChangeEvent<HTMLInputElement>) => void;
}
