import { useState } from "react"

import {
    SidebarListTitle,
    SidebarItemListWrapper,
    SidebarListWrapper,
    SidebarListItemCheckbox,
    SidebarStyledItemCheckbox,
} from "../../pages/user/workoutList/workoutListStyles"

import {
    muscleGroupList,
    muscleCheckboxList,
    muscleCheckboxListType,
    muscleGroupListType,
} from "../../model/workout/workout"

import Checkbox from "@mui/material/Checkbox"

import uid from "../../utils/uid"

const Categories = ({ muscles, setMuscle }) => {
    // const [muscles, setMuscle] = useState<muscleCheckboxListType>(muscleCheckboxList)

    const handleChange = (value: string) => {
        const newState = { ...muscles }
        newState[value] = !newState[value]
        setMuscle(newState)
    }
    const result = muscleGroupList.map((item: muscleGroupListType) => (
        <SidebarListItemCheckbox key={uid()}>
            <Checkbox
                sx={{
                    color: "#D1D1D1",
                    "&.Mui-checked": {
                        color: "#6A983C",
                    },
                }}
                onClick={() => handleChange(item.name)}
                checked={muscles[item.name]}
            />
            <SidebarStyledItemCheckbox>{item.name}</SidebarStyledItemCheckbox>
        </SidebarListItemCheckbox>
    ))
    return (
        <SidebarListWrapper>
            <SidebarListTitle>Muscle group</SidebarListTitle>
            <SidebarItemListWrapper>{result}</SidebarItemListWrapper>
        </SidebarListWrapper>
    )
}

export default Categories
