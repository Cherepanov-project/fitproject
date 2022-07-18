export const ADD_FORM_BUTTON = {
    height: "40px",
        fontSize: "12px",
        verticalAlign: "middle",
        backgroundColor: "grey",
        borderRadius: "20px",
        marginTop: 2.5,
        marginLeft: 3.5,
}

export const recFormInitalValue = (data) => ({
    header: "",
    description: data?.description || "",
    nutritionValues: [
        { name: "calories", value: 0 },
        { name: "protein", value: 0 },
        { name: "fats", value: 0 },
        { name: "carbs", value: 0 },
    ],
    ingredients: [
        {
            name: "",
            description: "",
        },
    ],
    recipe: "",
})