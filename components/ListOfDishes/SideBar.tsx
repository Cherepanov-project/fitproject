import { SideBarWrapper } from "../../pages/user/listOfDishes/stylesAllMenus"
import CheckboxStar from "./CheckboxStar"
import BlockSpecification from "./BlockSpecification"
import CheckboxMeals from "./CheckboxMeals"

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
