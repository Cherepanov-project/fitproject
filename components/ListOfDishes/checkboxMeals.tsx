import { useState } from "react"
import {
    initialValuesCheckBoxMeals,
    ISideBarCheckBoxMeals,
    ISpecificationMealsType,
    specificationMeals,
} from "../../models/sideBar/sideBar"
import {
    MenuH2,
    SpecificationWrapper,
} from "../../pages/user/listOfDishes/stylesAllMenus"
import { BoxCheckBox } from "../../pages/user/listOfDishes/stylesAllMenus"
import Checkbox from "@mui/material/Checkbox"

const CheckboxMeals = () => {
    const [checkboxsMeals, setCheckboxsMeals] = useState<ISideBarCheckBoxMeals>(
        initialValuesCheckBoxMeals
    )

    const setArgumentMeals = function (amt: string) {
        const newState = { ...checkboxsMeals }
        newState[amt] = !newState[amt]
        setCheckboxsMeals(newState)
    }

    const MealsNods = specificationMeals.map(
        (item: ISpecificationMealsType) => (
            <BoxCheckBox key={item.id}>
                <Checkbox
                    onClick={() => setArgumentMeals(item.name)}
                    checked={checkboxsMeals[item.name]}
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
