import { FormikConfig, FormikValues } from "formik"
import { ReactNode } from "react"

export interface IRegisterForm {
    username: string
    firstName?: string
    lastName?: string
    email: string
    password: string
    confirmPassword: string
    age?: number
    sex?: string
    phone: string
    prohibitedProducts?: string
    wishProducts?: string
    goal?: string
    quantityMeals?: string
    typeOfProgramm?: string
    numberOfWorkouts?: string
    typeOfTrainings?: string
}

export interface ILoginForm {
    username: string
    password: string
}

export interface IAdminLoginForm {
    email: string
    password: string
}

export interface IFormStatus {
    message: string
    type: string
    showPassword?: boolean
}

export interface IFormStatusProps {
    [key: string]: IFormStatus
}

export interface IFormikStepProps
    extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
    label: string
}

export interface IInputForm {
    placeholder: string
    name: string
    type?: string
}

export interface ISelectForm {
    placeholder: string
    name: string
    values: ISelectFormValues[]
}
interface ISelectFormValues {
    value: string
    title: string
}

export interface IFormikStepperProps {
    children: ReactNode[]
    initialValues: IRegisterForm
    onSubmit: Function
    registerSuccess: boolean
}

export interface ISocialLoginBtn {
    redirectURL: string
    typeOfSocial: string
    typeOfCode?: string
    img: string
}

export interface ILoginResponseSuccess {
    code: number
    success: true
    data: { jwtToken: string }
}
export interface IRegisterResponseSuccess {
    code: number
    data: object
    success: true
}
export interface ILoginOrRegisterResponseError {
    code: number
    success: false
    error: string
}

export interface IRegisterRequest {
    username: string
    email: string
    password: string
    phone: string
}

export interface IAdminRegisterRequest {
    username: string
    email: string
    password: string
}
