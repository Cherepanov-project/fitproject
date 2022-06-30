import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Form, Formik } from "formik"
import Cookies from "js-cookie"
import Image from "next/image"
import * as Yup from "yup"

import imageLogoApp from "./images/logoApp.svg"
import { FormContainer } from "./formContainer"
import TextField from "./TextField"
import api from "../../services/API"
import {
    DivCenter,
    DivDashboard,
    FormA,
    FormH1,
    FormH2,
    StyledButton,
} from "./Form.styled"

const SignUpForm = () => {
    const nameOfFields = {
        email: "Email ",
        username: "Admin name ",
    }

    const router = useRouter()

    const validate = Yup.object({
        username: Yup.string()
            .min(3, "Admin name must be at least 6 characters")
            .max(20)
            .required(),
        email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .max(20, "Password must be at max 20 characters")
            .required("Password is required"),
        repeat_password: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords should match")
            .required("Repeat password is required"),
    })

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    repeat_password: "",
                }}
                validationSchema={validate}
                onSubmit={async (values, { setFieldError }) => {
                    try {
                        const request = await api.auth.registration({
                            user: values,
                        })
                        Cookies.set("auth-token", request.data.user.token)
                        Cookies.set("username", request.data.user.username)
                        Cookies.set("image", request.data.user.image)
                        await router.replace("/admin/overview")
                    } catch (err) {
                        if (err.response.status === 422) {
                            Object.keys(err.response.data.errors).forEach(key => {
                                setFieldError(
                                    key,
                                    nameOfFields[key] +
                                    err.response.data.errors[key]
                                )
                            })
                        }
                    }
                }}
            >
                {formik => (
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
                            <StyledButton type="submit">Create</StyledButton>
                        </Form>
                        <DivCenter>
                            Already have an account?
                            <Link href={`/admin`}>
                                <FormA>Sign in</FormA>
                            </Link>
                        </DivCenter>
                    </div>
                )}
            </Formik>
        </FormContainer>
    )
}

export default SignUpForm
