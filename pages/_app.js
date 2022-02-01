import LayoutAdmin from "../components/Layout-admin";

const MyApp = ({ Component, pageProps }) => (
  <LayoutAdmin>
    <Component {...pageProps}/>
  </LayoutAdmin>
)

export default MyApp;