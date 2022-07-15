import { SideBarWrapper } from "./listOfDishes.styles"
import CheckboxStar from "./checkboxStar"
import BlockSpecification from "./blockSpecification"
import CheckboxMeals from "./checkboxMeals"

const SideBar = () => {
    return (
        <SideBarWrapper>
            <BlockSpecification />
            <CheckboxStar />
            <CheckboxMeals />
        </SideBarWrapper>
    )
}
export default SideBar
