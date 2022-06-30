import { FormikValues } from "formik"

import {
    ILoginForm,
    IRegisterForm,
    IFormStatusProps,
} from "../models/loginOrRegisterInterfaces/interfaces"

const formStatusProps: IFormStatusProps = {
    success: {
        message: "You have successfully logged into Your account",
        type: "success",
    },

    duplicate: {
        message: "Email already exist. Please use different email-id.",
        type: "error",
    },

    error: {
        message: "wrong login or password",
        type: "error",
    },
}

const loginOrRegisterUser = async (
    data: ILoginForm | IRegisterForm | FormikValues,
    resetForm: Function,
    setFormStatus: Function,
    setDisplayFormStatus: Function
) => {
    try {
        if (data) {
            setFormStatus(formStatusProps.success)
            resetForm({})
        }
    } catch (error) {
        const response = error.response
        if (response.data === "User already exist" && response.status === 400) {
            setFormStatus(formStatusProps.error)
        }
    } finally {
        setDisplayFormStatus(true)
    }
}

export default loginOrRegisterUser
