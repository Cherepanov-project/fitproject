import Script from "next/script"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

export const queryClient = new QueryClient()
const MyApp = ({ Component, pageProps }) => {
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
