import { MainWrapper,
        ItemListWrapper
                        } from "./workoutListStyles";
import Sidebar from "../../../common/workoutList/sidebar/Sidebar"
import { LayoutUser } from "../../../layouts/Layout-user/Layout-user";
import ItemList from "../../../common/workoutList/itemList/ItemList";
import {useState} from "react";
import {muscleCheckboxList, muscleCheckboxListType} from "../../../model/workout/workout";
import {useQuery} from "react-query";
import {fetchWorkouts} from "../../../API/workouts";

const workoutList = () => {
    const queryWorkouts = useQuery('workouts', fetchWorkouts)

    const [muscles, setMuscle] = useState<muscleCheckboxListType>(muscleCheckboxList)
    return (
        <MainWrapper>
            <Sidebar
                muscles={muscles}
                setMuscle={setMuscle}
            />
            <ItemListWrapper>
                <ItemList
                    muscles={muscles}
                />
            </ItemListWrapper>
        </MainWrapper>
    )
}

export default LayoutUser(workoutList)
