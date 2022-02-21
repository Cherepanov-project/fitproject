import '../utils/globals.scss'
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

const MyApp = ({Component, pageProps}) => {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                {Component.getLayout?Component.getLayout(<Component {...pageProps}/>):<Component {...pageProps}/>}
            </QueryClientProvider>
        </>
    )
}

export default MyApp;

