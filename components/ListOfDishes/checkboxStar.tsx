import { useState } from "react"
import Checkbox from "@mui/material/Checkbox"
import Rating from "@mui/material/Rating"

import { BoxCheckBox, SideBarCheckBox, MenuH2 } from "./listOfDishes.styles"
import {
    ISideBarCheckBoxStar,
    initialValuesCheckBoxStar,
    specificationStar,
    ISpecificationStarType,
} from "../../models/sideBar/sideBar"

const CheckboxStar = () => {
    const setArgumentStar = function (amt: string) {
        const newState = { ...checkbox }
        newState[amt] = !newState[amt]
        setCheckbox(newState)
    }

    const [checkbox, setCheckbox] = useState<ISideBarCheckBoxStar>(
        initialValuesCheckBoxStar
    )

    const StarsNods = specificationStar.map((item: ISpecificationStarType) => (
        <BoxCheckBox key={item.id}>
            <Checkbox
                onChange={() => setArgumentStar(item.name)}
                checked={checkbox[item.name]}
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
