import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Cookies from "js-cookie"
import { nanoid } from "nanoid"
import { Formik } from "formik"

import Snackbar from "@mui/material/Snackbar"
import { Button, CardContent, CircularProgress } from "@mui/material"

import { loginUser } from "../../../services/API/loginUser"

import { IFormStatus } from "../../../models/loginOrRegisterInterfaces/interfaces"

import { FormTextField } from "../../../components/User/FormTextField"

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
    useEffect(() => {
        if (Cookies.get("userLogin")) {
            router.push("/User/statistics")
        }
    }, [router])

    return (
        <>
            <Formik
                validationSchema={validationLoginUser}
                onSubmit={async (data, actions) => {
                    await paused(1000)
                    await loginOrRegisterUser(
                        data,
                        actions.resetForm,
                        setFormStatus,
                        setDisplayFormStatus
                    )
                    try {
                        const { res: token } = await loginUser(data)
                        setMsg("You have been login")
                        setOpen(true)
                        Cookies.set(
                            "userLogin",
                            JSON.stringify({ type: "interior", token }),
                            { expires: 2 }
                        )
                        router.push("/User/statistics")
                    } catch {
                        setMsg("Error")
                        setOpen(true)
                    }
                }}
                initialValues={{
                    login: "",
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
                                    name="login"
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
                open={open}
                onClose={closeMessage}
                message={msg}
                key={nanoid()}
            />
        </>
    )
}
