const userInfo = [
    {
        placeholder: "Enter Email",
        name: "email",
        type: "text",
        secrecy: false,
    },
    {
        placeholder: "Create User name",
        name: "userName",
        type: "text",
        secrecy: false,
    },
    {
        placeholder: "Contact number",
        name: "contactNumber",
        type: "text",
        secrecy: false,
    },
    {
        placeholder: "Password",
        name: "password",
        type: "password",
        secrecy: true,
    },
    {
        placeholder: "Confirm Password",
        name: "confirmPassword",
        type: "password",
        secrecy: true,
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
        placeholder: "",
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
