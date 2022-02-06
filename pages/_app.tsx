import Head from 'next/head'
import '../utils/globals.scss'
import LayoutAdmin from "../layouts/Layout-admin";


const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@0,300;1,300&display=swap" rel="stylesheet"/>
    </Head>
    <LayoutAdmin>
      <Component {...pageProps}/>
    </LayoutAdmin>
  </>
)

export default MyApp;