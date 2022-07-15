import MyApp from "./_app";
import User from "./user";

const Home = ({props}) => (
    <MyApp Component={User} pageProps={props} />
)

export default Home
