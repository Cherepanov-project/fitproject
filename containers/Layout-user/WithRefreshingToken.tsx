import { FC, useLayoutEffect } from "react"
import { refreshToken, activityChecker } from "../../services/API/refreshToken"
const WithRefreshingToken = (Component: FC) => {
    return function RefreshingToken(props): JSX.Element {
        useLayoutEffect(() => {
            const refresh = setInterval(refreshToken, 1000)
            const activity = setInterval(activityChecker, 200)
            return () => {
                clearInterval(refresh)
                clearInterval(activity)
            }
        }, [])

        return <Component {...props} />
    }
}
export default WithRefreshingToken
