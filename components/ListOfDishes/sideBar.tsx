import { SideBarWrapper } from "./listOfDishes.styles"
import CheckboxStar from "./checkboxStar"
import BlockSpecification from "./blockSpecification"
import CheckboxMeals from "./checkboxMeals"

const SideBar = ({ checkbox, setArgumentStar }) => {
  return (
    <SideBarWrapper>
      <BlockSpecification />
      <CheckboxStar checkbox={checkbox} setArgumentStar={setArgumentStar} />
      <CheckboxMeals />
    </SideBarWrapper>
  )
}
export default SideBar
