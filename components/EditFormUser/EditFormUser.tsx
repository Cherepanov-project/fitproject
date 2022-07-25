import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

// components
import TableHeader from "@/components/Table/TableHeader/tableHeader"

// styles
import {
    StyleContentWrapper,
    StyleForm,
    StyleMessageBox,
    StyleBackButton,
} from "@/components/EditFormUser/EditFormUser.styles"

// ui libs
import { Field, Formik, Form, FormikProps } from "formik"

import ArrowBackIcon from "@mui/icons-material/ArrowBack"

// utils
import { validationCreateUpdateUser } from "@/utils/validationSchema"
import { getQueryStringParams } from "@/utils/subscribePageName"

// API
import { postUser, putUserUpdate } from "@/API/users"

// interface
import { IEditFormUser } from "@/components/EditFormUser/EditFormUser.interface"

// model
import { initalStateUser } from "@/models/user/user"

const EditFormUser = ({ title, button }) => {
    const router = useRouter()
    const page = router.asPath.split("/").pop()

    const [data, setData] = useState(initalStateUser)

    useEffect(() => {
        const { data } = getQueryStringParams(window.location.search)

        data ? setData(() => JSON.parse(data)) : ""
    }, [])

    const [message, setMessage] = useState<IEditFormUser>({
        message: "",
        success: true,
    })

    const back = () => {
        setTimeout(() => {
            router.push({
                pathname: `/admin/users/${data.id}`,
                query: {
                    data: JSON.stringify(data),
                },
            }),
                1000
        })
    }

    return (
        <StyleContentWrapper>
            <TableHeader title={title}></TableHeader>
            <StyleMessageBox>
                {message.success ? (
                    <p style={{ color: "green" }}>{message.message}</p>
                ) : (
                    <p style={{ color: "red" }}>{message.message}</p>
                )}
            </StyleMessageBox>
            <Formik
                validationSchema={validationCreateUpdateUser}
                enableReinitialize={true}
                initialValues={{
                    id: data.id,
                    username: data.username,
                    password: "",
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    phone: data.phone,
                    age: data.age,
                    gender: data.gender,
                }}
                onSubmit={async (values, { resetForm }) => {
                    const response =
                        page === "add-form"
                            ? await postUser(values)
                            : await putUserUpdate(values)

                    const message =
                        page === "add-form"
                            ? "The user is registered successfully."
                            : "The user is update successfully."
                    if (response.success === false) {
                        setMessage({ message: response.error, success: false })
                    } else {
                        setMessage({
                            message: message,
                            success: true,
                        })
                        if (page !== "add-form") {
                            setData(() => values)
                        }

                        resetForm()
                    }
                }}
            >
                {({ errors, touched }) => (
                    <StyleForm>
                        <div>
                            <label htmlFor="username">
                                <span>Username</span>
                                <Field
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="User name"
                                />
                                {errors.username && touched.username ? (
                                    <span className="error">
                                        {errors.username}
                                    </span>
                                ) : null}
                            </label>

                            <label htmlFor="password">
                                <span>Password</span>
                                <Field
                                    type="text"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                {errors.password && touched.password ? (
                                    <span className="error">
                                        {errors.password}
                                    </span>
                                ) : null}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="firstName">
                                <span>First name</span>
                                <Field
                                    id="firstName"
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                />
                                {errors.firstName && touched.firstName ? (
                                    <span className="error">
                                        {errors.firstName}
                                    </span>
                                ) : null}
                            </label>
                            <label htmlFor="lastName">
                                <span>Last name</span>
                                <Field
                                    id="lastName"
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                />
                                {errors.lastName && touched.lastName ? (
                                    <span className="error">
                                        {errors.lastName}
                                    </span>
                                ) : null}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="email">
                                <span>Email address</span>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                                {errors.email && touched.email ? (
                                    <span className="error">
                                        {errors.email}
                                    </span>
                                ) : null}
                            </label>
                            <label htmlFor="phone">
                                <span>Phone</span>
                                <Field
                                    id="phone"
                                    type="phone"
                                    name="phone"
                                    placeholder="Phone"
                                />
                                {errors.phone && touched.phone ? (
                                    <span className="error">
                                        {errors.phone}
                                    </span>
                                ) : null}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="age">
                                <span>Age</span>
                                <Field
                                    id="age"
                                    type="number"
                                    name="age"
                                    placeholder="Age"
                                />
                                {errors.age && touched.age ? (
                                    <span className="error">{errors.age}</span>
                                ) : null}
                            </label>
                            <label htmlFor="gender">
                                <span>Gender</span>
                                <Field as="select" name="gender">
                                    <option value=""></option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                </Field>
                                {errors.gender && touched.gender ? (
                                    <span className="error">
                                        {errors.gender}
                                    </span>
                                ) : null}
                            </label>
                        </div>
                        <div>
                            <StyleBackButton
                                onClick={back}
                                variant="outlined"
                                startIcon={<ArrowBackIcon />}
                            >
                                Back
                            </StyleBackButton>

                            <label htmlFor="">
                                <input type="submit" value={button} />
                            </label>
                        </div>
                    </StyleForm>
                )}
            </Formik>
        </StyleContentWrapper>
    )
}

export default EditFormUser
