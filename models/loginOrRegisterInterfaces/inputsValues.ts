const userInfo = [
    {
        placeholder: "Enter Email",
        name: "email",
        type: "email",
    },
    {
        placeholder: "Create username",
        name: "username",
        type: "text",
    },
    {
        placeholder: "Contact number",
        name: "phone",
        type: "text",
    },
    {
        placeholder: "Password",
        name: "password",
        type: "password",
    },
    {
        placeholder: "Confirm Password",
        name: "confirmPassword",
        type: "password",
    },
]

const exercises = [
    {
        placeholder: "Choose type of program",
        name: "typeOfProgram",
        values: [
            { value: "aaa", title: "aaa" },
            { value: "bbb", title: "bbb" },
            { value: "ccc", title: "ccc" },
        ],
    },
    {
        placeholder: "Number of workouts per week",
        name: "numberOfWorkouts",
        values: [
            { value: "ddd", title: "ddd" },
            { value: "eee", title: "eee" },
            { value: "fff", title: "fff" },
        ],
    },
    {
        placeholder: "Type of trainings",
        name: "typeOfTrainings",
        values: [
            { value: "ggg", title: "ggg" },
            { value: "hhh", title: "hhh" },
            { value: "iii", title: "iii" },
        ],
    },
]

const mealPreferencesSelect = [
    { value: "jjj", title: "jjj" },
    { value: "kkk", title: "kkk" },
    { value: "lll", title: "lll" },
]

export { userInfo, exercises, mealPreferencesSelect }
