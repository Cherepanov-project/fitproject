import { useState } from "react"
import Checkbox from "@mui/material/Checkbox"
import Rating from "@mui/material/Rating"

import { BoxCheckBox, SideBarCheckBox, MenuH2 } from "./listOfDishes.styles"
import {
    specificationStar,
    ISpecificationStarType,
} from "@/models/sideBar/sideBar"

const CheckboxStar = ({ checkbox, setArgumentStar }) => {
  const StarsNods = specificationStar.map((item: ISpecificationStarType) => (
    <BoxCheckBox key={item.id}>
      <Checkbox
        onChange={() => setArgumentStar(item.name)}
        checked={checkbox[item.name]}
        style={{ paddingLeft: "0", marginLeft: "-2px"}}
      />
      <Rating name="read-only" readOnly value={item.id} />
    </BoxCheckBox>
  ))

  return (
    <SideBarCheckBox>
      <MenuH2>Rating</MenuH2>
      {StarsNods}
    </SideBarCheckBox>
  )
}

export default CheckboxStar
