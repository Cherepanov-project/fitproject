import * as Yup from "yup"

export const validationUser = Yup.object().shape({
    email: Yup.string().email("Enter valid email").required("Required"),

    userName: Yup.string()
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

    contactNumber: Yup.number().positive().integer().required("Required"),
})

export const validationMeal = Yup.object().shape({
    prohibitedProducts: Yup.string().required("Required"),
    wishProducts: Yup.string().required("Required"),
    goal: Yup.string().required("Required"),
    quantityMeals: Yup.string().required("Required"),
})

export const validationExercises = Yup.object().shape({
    typeOfProgramm: Yup.string().required("Required"),
    numberOfWorkouts: Yup.string().required("Required"),
    typeOfTrainings: Yup.string().required("Required"),
})

export const validationLoginUser = Yup.object().shape({
    login: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
})

export const validationRecipies = Yup.object({
    header: Yup.string()
        .required()
        .min(8, "Header should be of minimum 8 characters length"),
    description: Yup.string().required(),
    nutritionValues: Yup.array().of(
        Yup.object().shape({
            value: Yup.number().required("Value required"),
        })
    ),
    recipe: Yup.string().required(),
})
