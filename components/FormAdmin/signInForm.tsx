import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import Cookies from "js-cookie"

// ui libs
import { Snackbar } from "@mui/material"
import { Formik, Form } from "formik"

// create id
import { nanoid } from "nanoid"

// images
import { imageLogoApp } from "@/common/images/formAdmin"

// components
import TextField from "./textField"
import { FormContainer } from "./formContainer"

// api
import { postAdminToken } from "@/API/adminToken"

// utils
import { validateLoginAdmin } from "@/utils/validationSchema"

// constans
import { ACCESS_TOKEN } from "@/constants/titles"

// styles
import {
    DivCenter,
    DivDashboard,
    FormA,
    FormH1,
    FormH2,
    StyledButton,
} from "./formContainer.styles"

const SignInForm = () => {
    const router = useRouter()
    const [open, setOpen] = useState<boolean>(false)
    const [msg, setMsg] = useState<string>("")
    const [loginSuccess, setLoginSuccess] = useState<boolean>(false)
    const closeMessage = (): void => {
        setOpen(false)
    }

    // ВРЕМЕННО. Пока нет кнопки выхода
    if (!loginSuccess) {
        Cookies.remove(ACCESS_TOKEN)
    }

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                }}
                validationSchema={validateLoginAdmin}
                onSubmit={async data => {
                    const response = await postAdminToken(data)
                    if (!response.success) {
                        setMsg(response.error)
                        setOpen(true)
                        throw new Error(response.error)
                    } else {
                        setMsg("You have been logged in")
                        setOpen(true)
                        setLoginSuccess(true)
                        Cookies.set(ACCESS_TOKEN, response.data.jwtToken)
                        router.replace("/admin/overview")
                    }
                }}
            >
                {({ isSubmitting, handleSubmit }) => (
                    <div>
                        <DivCenter>
                            <Image
                                src={imageLogoApp}
                                width="48"
                                height="48"
                                alt="search"
                            />
                        </DivCenter>
                        <DivDashboard>Dashboard Kit</DivDashboard>
                        <FormH1>Log In to Admin Panel</FormH1>
                        <FormH2>Enter your username and password below</FormH2>
                        <Form onSubmit={handleSubmit}>
                            <TextField
                                placeholder="Username"
                                label="username"
                                name="username"
                                type="text"
                            />
                            <TextField
                                placeholder="Password"
                                label="Password"
                                name="password"
                                type="password"
                            />
                            <StyledButton
                                type="submit"
                                disabled={loginSuccess || isSubmitting}
                            >
                                Log in
                            </StyledButton>
                        </Form>
                        <DivCenter>
                            Don’t have an account?
                            <Link href={`/admin/sign-up`} passHref>
                                <FormA href={`/admin/sign-up`}>Sign Up</FormA>
                            </Link>
                        </DivCenter>
                    </div>
                )}
            </Formik>
            <Snackbar
                open={open}
                onClose={closeMessage}
                message={msg}
                key={nanoid()}
                data-testid="snackbar"
            />
        </FormContainer>
    )
}

export default SignInForm
