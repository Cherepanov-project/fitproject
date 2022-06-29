import { MainWrapper, ItemListWrapper } from "./workoutListStyles"
import Sidebar from "../../../components/WorkoutList/sidebar/Sidebar"

import { LayoutUser } from "../../../containers/Layout-user/Layout-user"
import ItemList from "../../../components/WorkoutList/itemList/ItemList"
import { useState } from "react"
import {
    muscleCheckboxList,
    muscleCheckboxListType,
} from "../../../model/workout/workout"

const workoutList = () => {
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

export default LayoutUser(workoutList)
