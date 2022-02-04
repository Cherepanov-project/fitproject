import LayoutAdmin from "../components/Layout-admin";
import Head from 'next/head'
import styles from '../utils/Home.module.scss'
import Sidebar from "../components/Sidebar/Sidebar";


const Home = () => (
    <LayoutAdmin>
        <h1>Hello World!</h1>
    </LayoutAdmin>
)

export default Home;
