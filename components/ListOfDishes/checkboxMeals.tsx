import Checkbox from "@mui/material/Checkbox"

import {
  BoxCheckBox,
  BoxCheckBoxSpan,
  MenuH2,
  SpecificationWrapper,
} from "./listOfDishes.styles"
import {
  ISpecificationMealsType,
  specificationMeals,
} from "@/models/sideBar/sideBar"

const CheckboxMeals = ({ checkboxMeals, setArgumentMeals }) => {
  const MealsNods = specificationMeals.map((item: ISpecificationMealsType) => (
    <BoxCheckBox key={item.id}>
      <Checkbox
        onClick={() => setArgumentMeals(item.name)}
        checked={checkboxMeals[item.name]}
        style={{
          paddingLeft: "0",
          marginLeft: "-2px",
        }}
      />
      <BoxCheckBoxSpan>{item.name}</BoxCheckBoxSpan>
    </BoxCheckBox>
  ))

  return (
    <>
      <div style={{marginTop: "16px"}}>
        <MenuH2>Meals</MenuH2>
        <SpecificationWrapper>{MealsNods}</SpecificationWrapper>
      </div>
    </>
  )
}
export default CheckboxMeals
