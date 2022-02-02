import LayoutAdmin from "../components/Layout-admin";
import Head from 'next/head'
import styles from '../utils/Home.module.scss'
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => (
  <LayoutAdmin>
    <Head>
      <title>Home</title>
    </Head>
      <Sidebar/>
    <h2>Hello World</h2>
  </LayoutAdmin>
)

export default Home;
