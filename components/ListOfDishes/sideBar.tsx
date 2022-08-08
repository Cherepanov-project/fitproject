import { SideBarWrapper } from "./listOfDishes.styles"
import CheckboxStar from "./checkboxStar"
import BlockSpecification from "./blockSpecification"
import CheckboxMeals from "./checkboxMeals"

const SideBar = ({
  checkbox,
  setArgumentStar,
  checkboxMeals,
  setArgumentMeals,
}) => {
  return (
    <SideBarWrapper>
      <BlockSpecification />
      <CheckboxStar checkbox={checkbox} setArgumentStar={setArgumentStar} />
      <CheckboxMeals
        checkboxMeals={checkboxMeals}
        setArgumentMeals={setArgumentMeals}
      />
    </SideBarWrapper>
  )
}
export default SideBar
