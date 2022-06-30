import React from "react"
import { useState } from "react"
import { nanoid } from "nanoid"
import { CardContent, Snackbar } from "@mui/material"
import { registerUser } from "../../../services/API/loginUser"

import { IRegisterForm } from "../../../models/loginOrRegisterInterfaces/interfaces"
import { formRegisterValues } from "../../../models/loginOrRegisterInterfaces/initialValues"
import {
    userInfo,
    exercises,
    mealPreferenciesSelect,
} from "../../../models/loginOrRegisterInterfaces/inputsValues"
import {
    validationUser,
    validationMeal,
    validationExercises,
} from "../../../utils/validationSchema"
import redirectToLoginPage from "../../../utils/redirect"
import { LOGIN_PAGE } from "../../../constants/urls"

import { RightSide } from "../userLoginOrRegisterStyle"
import { FormikStepper } from "./FormikStepper"
import { FormikStep } from "../../../components/User/FormikStep"
import { FormTextField } from "../../../components/User/FormTextField"
import { FormSelectField } from "../../../components/User/FormSelectField"

export const RegisterForm: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [msg, setMsg] = useState<string>("")
    const [registerSuccess, setRegisterSuccess] = useState<boolean>(false)
    const closeMessage = (): void => {
        setOpen(false)
    }

    return (
        <RightSide>
            <CardContent sx={{ width: "80%", margin: "0 auto" }}>
                <FormikStepper
                    onSubmit={async (data: IRegisterForm) => {
                        try {
                            const response = await registerUser(data)
                            if (!response.success) {
                                throw new Error(response.error)
                            }
                            setRegisterSuccess(true)
                            setMsg("You have been register")
                            setOpen(true)
                            redirectToLoginPage(LOGIN_PAGE)
                        } catch (error) {
                            setMsg(error.message)
                            setOpen(true)
                        }
                    }}
                    initialValues={formRegisterValues}
                    registerSuccess={registerSuccess}
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
                                />
                            )
                        })}
                    </FormikStep>

                    <FormikStep
                        label="meal Preferencies"
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
            <Snackbar
                open={open}
                onClose={closeMessage}
                message={msg}
                key={nanoid()}
                data-testid="snackbar"
            />
        </RightSide>
    )
}
