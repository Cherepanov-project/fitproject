import Head from 'next/head'
import '../utils/globals.scss'
import LayoutAdmin from "../layouts/Layout-admin";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

const MyApp = ({Component, pageProps}) => {

    // if (Component.getLayout) {
    //     return Component.getLayout(<Component {...pageProps}/>);
    // }

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@0,300;1,300&display=swap"
                      rel="stylesheet"/>
            </Head>
            <QueryClientProvider client={queryClient}>
                {Component.getLayout?Component.getLayout(<Component {...pageProps}/>):<Component {...pageProps}/>}
            </QueryClientProvider>
        </>
    )
}

export default MyApp;