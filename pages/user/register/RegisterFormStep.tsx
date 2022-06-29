import { useState } from "react"
import { nanoid } from "nanoid"
import { CardContent } from "@mui/material"

import {
    IRegisterForm,
    IFormStatus,
} from "../../../models/loginOrRegisterInterfaces/interfaces"
import {
    formStatusValue,
    formRegisterValues,
} from "../../../models/loginOrRegisterInterfaces/initialValues"
import {
    userInfo,
    exercises,
    mealPreferenciesSelect,
} from "../../../models/loginOrRegisterInterfaces/inputsValues"

import { FormTextField } from "../../../components/User/FormTextField"
import { FormSelectField } from "../../../components/User/FormSelectField"
import FormikStep from "../../../components/User/FormikStep"

import {
    validationUser,
    validationMeal,
    validationExercises,
} from "../../../utils/validationSchema"
import { loginOrRegisterUser } from "../../../utils/loginOrRegisterUser"
import { redirectToLoginPage } from "../../../utils/redirect"
import { paused } from "../../../utils/paused"
import { LOGIN_PAGE } from "../../../utils/urls"

import { RightSide } from "../userLoginOrRegisterStyle"
import { FormikStepper } from "./FormikStepper"

export const RegisterForm: React.FC = () => {
    const [displayFormStatus, setDisplayFormStatus] = useState<boolean>(false)

    const [formStatus, setFormStatus] = useState<IFormStatus>(formStatusValue)

    const [values, setValues] = useState<IRegisterForm>(formRegisterValues)

    return (
        <RightSide>
            <CardContent sx={{ width: "80%", margin: "0 auto" }}>
                <FormikStepper
                    onSubmit={async (
                        data: IRegisterForm,
                        actions: { resetForm: Function }
                    ) => {
                        await paused(3000)
                        redirectToLoginPage(LOGIN_PAGE)
                        setValues({ ...data })
                        await loginOrRegisterUser(
                            data,
                            actions.resetForm,
                            setFormStatus,
                            setDisplayFormStatus
                        )
                        console.log("data sign in: ", data)
                    }}
                    initialValues={values}
                >
                    <FormikStep
                        label="userInfo"
                        validationSchema={validationUser}
                    >
                        {userInfo.map(field => {
                            return (
                                <FormTextField
                                    key={nanoid()}
                                    placeholder={field.placeholder}
                                    name={field.name}
                                    type={field.type}
                                    secrecy={field.secrecy}
                                />
                            )
                        })}
                    </FormikStep>

                    <FormikStep
                        label="mealPreferencies"
                        validationSchema={validationMeal}
                    >
                        <FormTextField
                            placeholder="Enter prohibited products"
                            name="prohibitedProducts"
                            type="text"
                        />
                        <FormTextField
                            placeholder="Enter Wish products"
                            name="wishProducts"
                            type="text"
                        />
                        <FormSelectField
                            placeholder="Choose Goal"
                            name="goal"
                            values={mealPreferenciesSelect}
                        />
                        <FormTextField
                            placeholder="Quantity meals a day"
                            name="quantityMeals"
                            type="text"
                        />
                    </FormikStep>

                    <FormikStep
                        label="exercises"
                        validationSchema={validationExercises}
                    >
                        {exercises.map(field => {
                            return (
                                <FormSelectField
                                    key={nanoid()}
                                    placeholder={field.placeholder}
                                    name={field.name}
                                    values={field.values}
                                />
                            )
                        })}
                    </FormikStep>
                </FormikStepper>
            </CardContent>
        </RightSide>
    )
}
