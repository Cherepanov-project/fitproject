import { useState } from "react"

import { MainWrapper, ItemListWrapper } from "./workoutListStyles"
import Sidebar from "../../../components/WorkoutList/sidebar/sidebar"
import { LayoutUser } from "../../../containers/Layout-user/layoutUser"
import ItemList from "../../../components/WorkoutList/itemList/itemList"

import {
    muscleCheckboxList,
    muscleCheckboxListType,
} from "../../../models/workout/workout"

const WorkoutList = () => {
    const [muscles, setMuscle] =
        useState<muscleCheckboxListType>(muscleCheckboxList)
    return (
        <MainWrapper>
            <Sidebar muscles={muscles} setMuscle={setMuscle} />
            <ItemListWrapper>
                <ItemList muscles={muscles} />
            </ItemListWrapper>
        </MainWrapper>
    )
}

export default LayoutUser(WorkoutList)
