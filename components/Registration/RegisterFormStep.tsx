import React from "react"
import { useState } from "react"
import { nanoid } from "nanoid"
import { CardContent, Snackbar } from "@mui/material"

import { IRegisterForm } from "@/models/loginOrRegisterInterfaces/interfaces"
import { formRegisterValues } from "@/models/loginOrRegisterInterfaces/initialValues"
import redirectToLoginPage from "@/utils/redirect"
import { LOGIN_PAGE } from "@/constants/urls"
import { RightSide } from "../RegOrLoginSocial/regOrLoginSocial.styles"
import { FormikStepper } from "./FormikStepper"
import { FormikStep } from "../User/formikStep"
import { FormTextField } from "../User/formTextField"
import { FormSelectField } from "../User/formSelectField"
import { userInfo, exercises, mealPreferencesSelect } from "@/models/loginOrRegisterInterfaces/inputsValues"
import { validationUser, validationMeal, validationExercises } from "@/utils/validationSchema"
import { postRegisterUser } from "@/API/userRegister"

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
                        const response = await postRegisterUser(data)
                        if (response.success === false) {
                            setMsg(response.error)
                            setOpen(true)
                        } else {
                          setRegisterSuccess(true)
                          setMsg("You have been register")
                          setOpen(true)
                          // "http://localhost:3000/fitproject/user" адрес LOGIN_PAGE приводит к ошибке
                          redirectToLoginPage(
                            "http://localhost:3000/fitproject/user"
                          )
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
                            values={mealPreferencesSelect}
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
