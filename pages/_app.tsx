import Script from "next/script"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import Cookies from "js-cookie"

import { postRefreshAdminToken } from "../API/adminToken"
import { ACCESS_TOKEN } from "../constants/titles"

export const queryClient = new QueryClient()
const MyApp = ({ Component, pageProps }) => {

    //ВРЕМЕННО. Рефреш админского токена
    setInterval(() => {
        if (Cookies.get(ACCESS_TOKEN))  {
            postRefreshAdminToken(Cookies.get(ACCESS_TOKEN))
        }
    }, 86400)


    return (
        <>
            <Script
                src="https://apis.google.com/js/platform.js?onload=init"
                strategy="beforeInteractive"
            />
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    )
}

export default MyApp
