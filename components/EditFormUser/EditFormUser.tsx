import React, { useEffect, useState } from "react"
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
import { addFormModel } from "@/models/admin/add-form/addForm.model"

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
        if (title !== "Add user") {
            setTimeout(() => {
                router.push({
                    pathname: `/admin/users/${data.id}`,
                    query: {
                        data: JSON.stringify(data),
                    },
                }),
                    1000
            })
        } else {
            router.back()
        }
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
                    ...data,
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
                            {addFormModel.map(item => {
                                if (item.type !== "select") {
                                    return (
                                        <label
                                            key={item.label}
                                            htmlFor={item.label}
                                        >
                                            <span>{item.span}</span>
                                            <Field
                                                type={item.type}
                                                name={item.label}
                                                id={item.label}
                                                placeholder={item.span}
                                            />
                                            {errors[item.label] &&
                                            touched[item.label] ? (
                                                <span className="error">
                                                    {errors[item.label]}
                                                </span>
                                            ) : null}
                                        </label>
                                    )
                                } else {
                                    return (
                                        <label htmlFor={item.label}>
                                            <span>{item.span}</span>
                                            <Field
                                                as={item.type}
                                                name={item.label}
                                            >
                                                <option value=""></option>
                                                <option value="MALE">
                                                    Male
                                                </option>
                                                <option value="FEMALE">
                                                    Female
                                                </option>
                                            </Field>
                                        </label>
                                    )
                                }
                            })}
                        </div>
                        <div className="block-button">
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
