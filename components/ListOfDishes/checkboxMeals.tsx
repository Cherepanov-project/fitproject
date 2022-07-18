import { useState } from "react"
import Checkbox from "@mui/material/Checkbox"

import { BoxCheckBox, MenuH2, SpecificationWrapper } from "./listOfDishes.styles"
import {
    initialValuesCheckBoxMeals,
    ISideBarCheckBoxMeals,
    ISpecificationMealsType,
    specificationMeals,
} from "@/models/sideBar/sideBar"

const CheckboxMeals = () => {
    const [checkboxMeals, setCheckboxMeals] = useState<ISideBarCheckBoxMeals>(
        initialValuesCheckBoxMeals
    )

    const setArgumentMeals = function (amt: string) {
        const newState = { ...checkboxMeals }
        newState[amt] = !newState[amt]
        setCheckboxMeals(newState)
    }

    const MealsNods = specificationMeals.map(
        (item: ISpecificationMealsType) => (
            <BoxCheckBox key={item.id}>
                <Checkbox
                    onClick={() => setArgumentMeals(item.name)}
                    checked={checkboxMeals[item.name]}
                />
                {item.name}
            </BoxCheckBox>
        )
    )

    return (
        <>
            <MenuH2>Meals</MenuH2>
            <SpecificationWrapper>{MealsNods}</SpecificationWrapper>
        </>
    )
}
export default CheckboxMeals
