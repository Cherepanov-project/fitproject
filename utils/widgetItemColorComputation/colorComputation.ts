export const colorComputation = (value: string): string => {
    const urgentTaskColor = "rgba(254, 196, 0, 1)"
    const newTaskColor = "rgba(41, 204, 151, 1)";
    const defaultColor = "rgba(240, 241, 247, 1)";

    switch (value) {
        case ("Urgent"):
            return urgentTaskColor;
        case ("New"):
            return newTaskColor;
        default:
            return defaultColor;
    }
};