interface IHeaderCardsDataTypes {
    name: string
    value: string
}

const headerCardsData: IHeaderCardsDataTypes[] = [
    {
        name: "Unresolved",
        value: "60",
    },
    {
        name: "Overdue",
        value: "16",
    },
    {
        name: "Open",
        value: "43",
    },
    {
        name: "On hold",
        value: "64",
    },
]

export { headerCardsData }
