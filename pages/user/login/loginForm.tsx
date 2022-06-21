import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Cookies from "js-cookie"
import { nanoid } from "nanoid"
import { Formik } from "formik"

import Snackbar from "@mui/material/Snackbar"
import { Button, CardContent, CircularProgress } from "@mui/material"

import { loginUser } from "../../../API/loginUser"

import { IFormStatus } from "../../../model/loginOrRegisterInterfaces/interfaces"

import { FormTextField } from "../../../common/user/FormTextField"

import { paused } from "../../../utils/paused"
import { loginOrRegisterUser } from "../../../utils/loginOrRegisterUser"
import { validationLoginUser } from "../../../utils/validationSchema"

import { RightSide, Title2, ForgorPassword } from "../userLoginOrRegisterStyle"
import { RegOrLoginSocial } from "../RegOrLoginSocial"

export const LoginForm: React.FC = () => {
    const [displayFormStatus, setDisplayFormStatus] = useState<boolean>(false)
    const [formStatus, setFormStatus] = useState<IFormStatus>({
        message: "",
        type: "",
    })

    const [open, setOpen] = useState(false)
    const [msg, setMsg] = useState("")
    const closeMessage = () => {
        setOpen(false)
    }

    const router = useRouter()

    //перенаправление на страницу пользователя если пользователь был залогинен
    // useEffect(() => {
    //     if (Cookies.get("userLogin")) {
    //         router.push("/user/statistics")
    //     }
    // }, [router])

    return (
        <>
            <Formik
                validationSchema={validationLoginUser}
                onSubmit={async (data, actions) => {
                    // await loginOrRegisterUser(
                    //     data,
                    //     actions.resetForm,
                    //     setFormStatus,
                    //     setDisplayFormStatus
                    // )
                    try {
                        const {
                            data: token,
                            success,
                            error,
                        } = await loginUser(data)
                        if (!success) {
                            throw new Error(error)
                        }
                        setMsg("You have been login")
                        setOpen(true)
                        Cookies.set(
                            "userToken",
                            JSON.stringify({ type: "interior", token }),
                            { expires: 2 }
                        )
                        // router.push("/user/statistics")
                    } catch (error) {
                        setMsg(error.message)
                        setOpen(true)
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
                                    secrecy={true}
                                />
                                <div>
                                    {
                                        <Link href="#" passHref>
                                            <ForgorPassword>
                                                Forgot password?
                                            </ForgorPassword>
                                        </Link>
                                    }
                                </div>
                                <Button
                                    fullWidth
                                    sx={{ backgroundColor: "#6D63FF" }}
                                    type="submit"
                                    disabled={isSubmitting}
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
                // data-testid="snackBar"
                open={open}
                onClose={closeMessage}
                message={msg}
                key={nanoid()}
                data-testid="Snackbar"
            />
        </>
    )
}
