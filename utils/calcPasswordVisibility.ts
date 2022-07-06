const calcPasswordVisibility = (
    type: string,
    showPassword: boolean
): string => {
    if (type !== "password") {
        return type
    }
    if (showPassword) {
        return "text"
    }
    if (!showPassword) {
        return "password"
    }
}
export default calcPasswordVisibility
