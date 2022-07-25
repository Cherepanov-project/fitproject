import { SidebarWrapper } from "../workoutList.styles"
import Categories from "../categories"
import MuscleGroup from "../muscleGroup"
import { FontPoppins, FontOpenSans } from "@/utils/fonts/fontStyles"

const Sidebar = ({ muscles, setMuscle }) => {
    return (
      <SidebarWrapper>
            <FontPoppins />
            <FontOpenSans />
            <Categories />
            <MuscleGroup muscles={muscles} setMuscle={setMuscle} />
        </SidebarWrapper>
    )
}

export default Sidebar
