import React, { useState, FC } from "react";
import { useQuery } from "react-query";
import { CircularProgress } from "@mui/material";
import SortAndFilter from "@/components/SortAndFilter";
import { IProps, IData } from "@/containers/Layout-admin/DataWrapper/dataWrapper.interface";
import { StyleLoaderContainer } from "@/styles/admin/recipes/recipes.styles";

const DataWrapper: FC<IProps> = ({ config: { key, method, ...configs } }) => {
    const [data, setData] = useState<IData[]>([])
    const [listChange, setListChange] = useState<boolean>(false)
    const { isLoading, error } = useQuery([key, listChange], method, {
        onSuccess: (data: IData[]) => {
            setData(data)
        }
    })

    const updateList = () => {
        const isChanged = listChange;
        setListChange(!isChanged);
    }

    if (error instanceof Error) {
        throw new Error(error.message)
        //return <h1>{error.message}</h1>
    }
    if (isLoading || data.length === 0) {
        return (
            <StyleLoaderContainer>
                <CircularProgress></CircularProgress>
            </StyleLoaderContainer>
        )
    }

    return <SortAndFilter config={configs} data={data} updateList={updateList}/>
}

export default DataWrapper