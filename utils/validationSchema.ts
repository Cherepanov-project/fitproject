import * as Yup from "yup"

const validationUser = Yup.object().shape({
    email: Yup.string().email("Enter valid email").required("Required"),

    username: Yup.string()
        .min(5, "User name must be 5 characters or less")
        .required("Required"),

    password: Yup.string()
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{5,20}\S$/,
            "Password must be more than 5 characters and not exceed 20. Must contain one uppercase, one lowercase, one special character and no spaces"
        )
        .required("Required"),

    confirmPassword: Yup.string()
        .required("Required")
        .test("password-match", "Password must match", function (values) {
            return this.parent.password === values
        }),

    phone: Yup.string()
        .required("Required")
        .matches(
            /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
            "Phone number is not valid "
        ),
})

export const validationMeal = Yup.object().shape({
    wishProducts: Yup.string(),
    prohibitedProducts: Yup.string(),
    goal: Yup.string(),
    quantityMeals: Yup.string(),
})

export const validationExercises = Yup.object().shape({
    typeOfProgramm: Yup.string(),
    numberOfWorkouts: Yup.string(),
    typeOfTrainings: Yup.string(),
})

export const validationLoginUser = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
})

export {
    validationUser,
    validationMeal,
    validationExercises,
    validationLoginUser,
}
