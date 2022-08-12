import { useState } from "react"

import {
  MainWrapper,
  ItemListWrapper,
} from "@/components/WorkoutList/workoutList.styles"
import Sidebar from "@/components/WorkoutList/SideBar/sidebar"
import { LayoutUser } from "@/containers/Layout-user/layoutUser"
import ItemList from "@/components/WorkoutList/ItemList/itemList"
import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken"
import {
  muscleCheckboxList,
  muscleCheckboxListType,
} from "@/models/workout/workout"
import ErrorBoundary from "@/components/ErrorBoundary/errorBoundary"

const WorkoutList = () => {
  const [muscles, setMuscle] =
    useState<muscleCheckboxListType>(muscleCheckboxList)
  return (
    <MainWrapper>
      <Sidebar muscles={muscles} setMuscle={setMuscle} />
      <ItemListWrapper>
        <ErrorBoundary>
          <ItemList muscles={muscles} />
        </ErrorBoundary>
      </ItemListWrapper>
    </MainWrapper>
  )
}

export default WithRefreshingToken(LayoutUser(WorkoutList))
