import { SidebarWrapper } from "../../../pages/user/workoutList/workoutListStyles"
import Categories from "../Categories"
import MuscleGroup from "../MuscleGroup"

const Sidebar = ({muscles, setMuscle}) => {

    return (
        <SidebarWrapper>
            <Categories/>
            <MuscleGroup
                muscles={muscles}
                setMuscle={setMuscle}
            />
        </SidebarWrapper>
    )
}

export default Sidebar
