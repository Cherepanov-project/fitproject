import { SidebarWrapper } from "../../../pages/user/workoutList/workoutListStyles"
import Categories from "../Categories"
import MuscleGroup from "../MuscleGroup"

const Sidebar = () => {

    return (
        <SidebarWrapper>
            <Categories/>
            <MuscleGroup/>
        </SidebarWrapper>
    )
}

export default Sidebar