import Link from "next/link"
import { useRouter } from "next/router"
// OTHER LIBRARIES
import { Formik, Form } from "formik"
import Image from "next/image"
import Cookies from "js-cookie"
import * as Yup from "yup"
// CUSTOM COMPONENTS
import {
    DivCenter,
    DivDashboard,
    FormA,
    FormH1,
    FormH2,
    StyledButton,
} from "./Form.styled"
import api from "../../services"
import TextField from "./TextField"
import { FormContainer } from "./formContainer"
// Images
import imageLogoApp from "./images/logoApp.svg"

const SingInForm = () => {
    const router = useRouter()
    const validate = Yup.object({
        email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .max(20, "Password must be at max 20 characters")
            .required("Password is required"),
    })

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={validate}
                onSubmit={async (values, { setFieldError }) => {
                    try {
                        const request = await api.auth.login({ user: values })
                        Cookies.set("auth-token", request.data.user.token)
                        Cookies.set("username", request.data.user.username)
                        Cookies.set("image", request.data.user.image)

                        router.replace("/admin/overview")
                    } catch (e) {
                        if (e.response.status === 403) {
                            Object.keys(e.response.data.errors).forEach(key => {
                                setFieldError(
                                    "password",
                                    key + " " + e.response.data.errors[key]
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
                        <FormH1>Log In to Admin Panel</FormH1>
                        <FormH2>Enter your email and password below</FormH2>
                        <Form>
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
                            <StyledButton type="submit">Log in</StyledButton>
                        </Form>
                        <DivCenter>
                            Don’t have an account?
                            <Link href={`/admin/sign-up`}>
                                <FormA href={`/admin/sign-up`}>Sign Up</FormA>
                            </Link>
                        </DivCenter>
                    </div>
                )}
            </Formik>
        </FormContainer>
    )
}

export default SingInForm
