interface ITasksDataTypes {
    name: string
    value: string
}

const tasksData: ITasksDataTypes[] = [
    {
        name: "Finish ticket update",
        value: "Urgent",
    },
    {
        name: "Create new ticket example",
        value: "New",
    },
    {
        name: "Update ticket report",
        value: "Default",
    },
]

export { tasksData }
