import Checkbox from "@mui/material/Checkbox"
import { BoxCheckBox } from "../../pages/user/listOfDishes/stylesAllMenus"
import Rating from "@mui/material/Rating"
import { useState } from "react"
import {
    ISideBarCheckBoxStar,
    initialValuesCheckBoxStar,
    specificationStar,
    ISpecificationStarType,
} from "../../models/sideBar/sideBar"
import {
    SideBarCheckBox,
    MenuH2,
} from "../../pages/user/listOfDishes/stylesAllMenus"

const CheckboxStar = () => {
    const setArgumentStar = function (amt: string) {
        const newState = { ...checkboxs }
        newState[amt] = !newState[amt]
        setCheckbox(newState)
    }

    const [checkboxs, setCheckbox] = useState<ISideBarCheckBoxStar>(
        initialValuesCheckBoxStar
    )

    const StarsNods = specificationStar.map((item: ISpecificationStarType) => (
        <BoxCheckBox key={item.id}>
            <Checkbox
                onChange={() => setArgumentStar(item.name)}
                checked={checkboxs[item.name]}
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
