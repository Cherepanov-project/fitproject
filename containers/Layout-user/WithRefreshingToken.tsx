import { FC, useLayoutEffect } from "react"
import { refreshToken, activityChecker } from "../../services/API/refreshToken"
const WithRefreshingToken = (Component: FC) => {
    return function RefreshingToken(): JSX.Element {
        const refreshInterval = 840_000 //14 mins
        const activityInterval = 60_000 //1 min

        useLayoutEffect(() => {
            refreshToken()
            const refresh = setInterval(refreshToken, refreshInterval)
            const activity = setInterval(activityChecker, activityInterval)
            return () => {
                clearInterval(refresh)
                clearInterval(activity)
            }
        }, [])

        return <Component />
    }
}
export default WithRefreshingToken
