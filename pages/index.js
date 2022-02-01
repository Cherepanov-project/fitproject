import LayoutAdmin from "../components/Layout-admin";
import Head from 'next/head'
import styles from '../utils/Home.module.scss'

const Home = () => (
  <LayoutAdmin>
    <Head>
      <title>Home</title>
    </Head>
    <h2>Hello World</h2>
  </LayoutAdmin>
)

export default Home;
