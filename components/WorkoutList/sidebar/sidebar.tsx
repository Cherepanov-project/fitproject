import { SidebarWrapper } from "../../../pages/user/workoutList/workoutListStyles"
import Categories from "../categories"
import MuscleGroup from "../muscleGroup"

const Sidebar = ({ muscles, setMuscle }) => {
    return (
        <SidebarWrapper>
            <Categories />
            <MuscleGroup muscles={muscles} setMuscle={setMuscle} />
        </SidebarWrapper>
    )
}

export default Sidebar
