import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import { Form, Formik } from "formik"
import { Snackbar } from "@mui/material"
import { nanoid } from "nanoid"

import { validateSignUpAdmin } from "../../utils/validationSchema"
import imageLogoApp from "../../common/images/formAdmin/logoApp.svg"
import { FormContainer } from "./formContainer"
import TextField from "./textField"
import { registerUser } from "../../API/loginUser"
import { DivCenter, DivDashboard, FormA, FormH1, FormH2, StyledButton } from "./formContainer.styles"

const SignUpForm = () => {
    const router = useRouter()
    const [open, setOpen] = useState<boolean>(false)
    const [msg, setMsg] = useState<string>("")
    const [registerSuccess, setRegisterSuccess] = useState<boolean>(false)
    const closeMessage = (): void => {
        setOpen(false)
    }
    return (
        <FormContainer>
            <Formik
                initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    repeat_password: "",
                }}
                validationSchema={validateSignUpAdmin}
                onSubmit={async data => {
                    const response = await registerUser(data)
                    if (response.success === false) {
                        setMsg(response.error)
                        setOpen(true)
                    } else {
                        setRegisterSuccess(true)
                        setMsg("You have been register")
                        setOpen(true)
                        router.push("/admin")
                    }
                }}
            >
                {({ isSubmitting }) => (
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
                        <FormH1>Sign up to Admin Panel</FormH1>
                        <FormH2>
                            Enter your username,email and password below
                        </FormH2>
                        <Form>
                            <TextField
                                placeholder="Admin name"
                                label="Admin name"
                                name="username"
                                type="text"
                            />
                            <TextField
                                placeholder="Email address"
                                label="Email"
                                name="email"
                                type="email"
                            />
                            <TextField
                                placeholder="Password"
                                label="Password"
                                name="password"
                                type="password"
                            />
                            <TextField
                                placeholder="Password"
                                label="Repeat password"
                                name="repeat_password"
                                type="password"
                            />
                            <StyledButton
                                type="submit"
                                disabled={registerSuccess || isSubmitting}
                            >
                                Create
                            </StyledButton>
                        </Form>
                        <DivCenter>
                            Already have an account?
                            <Link href={`/admin`} passHref>
                                <FormA>Sign in</FormA>
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

export default SignUpForm
