import React, { useState, useEffect } from "react"
import Link from "next/link"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { nanoid } from "nanoid"
import { Formik } from "formik"
import { Button, CardContent, CircularProgress } from "@mui/material"
import Snackbar from "@mui/material/Snackbar"

import { postLoginUser } from "@/API/userLogin"
import { FormTextField } from "@/components/User/formTextField"
import { validationLoginUser } from "@/utils/validationSchema"
import {
    RightSide,
    Title2,
    ForgotPassword,
} from "@/components/RegOrLoginSocial/regOrLoginSocial.styles"
import RegOrLoginSocial from "@/components/RegOrLoginSocial/regOrLoginSocial"
import { ACCESS_TOKEN } from "@/constants/titles"

const SignInForm: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [msg, setMsg] = useState<string>("")
    const [loginSuccess, setLoginSuccess] = useState<boolean>(false)
    const closeMessage = (): void => {
        setOpen(false)
    }

    const router = useRouter()

    //перенаправление на страницу пользователя если пользователь был залогинен
    useEffect(() => {
        if (Cookies.get(ACCESS_TOKEN)) {
            router.push("/user/statistics")
        }
    }, [router])

    return (
        <>
            <Formik
                validationSchema={validationLoginUser}
                onSubmit={async data => {
                    const response = await postLoginUser(data)

                    if (response.success === false) {
                        setMsg(response.error)
                        setOpen(true)
                        throw new Error(response.error)
                    } else {
                        setMsg("You have been login")
                        setOpen(true)
                        setLoginSuccess(true)
                        Cookies.set(
                            ACCESS_TOKEN,
                            JSON.stringify(response.data.jwtToken)
                        )
                        router.push("/user/statistics")
                    }
                }}
                initialValues={{
                    username: "",
                    password: "",
                }}
            >
                {({ isSubmitting, handleSubmit }) => (
                    <RightSide>
                        <CardContent sx={{ width: "80%", margin: "0 auto" }}>
                            <Title2>Sign in</Title2>
                            <form onSubmit={handleSubmit}>
                                <FormTextField
                                    placeholder="Enter email or user name"
                                    name="username"
                                    type="text"
                                />
                                <FormTextField
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                />
                                <div>
                                    {
                                        <Link href="#" passHref>
                                            <ForgotPassword>
                                                Forgot password?
                                            </ForgotPassword>
                                        </Link>
                                    }
                                </div>
                                <Button
                                    data-testid="submitButton"
                                    fullWidth
                                    sx={{ backgroundColor: "#6D63FF" }}
                                    type="submit"
                                    disabled={isSubmitting || loginSuccess}
                                    variant="contained"
                                    startIcon={
                                        isSubmitting ? (
                                            <CircularProgress size="1.5rem" />
                                        ) : null
                                    }
                                >
                                    {isSubmitting ? "" : "Login"}
                                </Button>
                            </form>
                            <RegOrLoginSocial />
                        </CardContent>
                    </RightSide>
                )}
            </Formik>
            <Snackbar
                open={open}
                onClose={closeMessage}
                message={msg}
                key={nanoid()}
                data-testid="snackbar"
            />
        </>
    )
}

export default SignInForm