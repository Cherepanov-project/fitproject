import {FC, ReactNode} from 'react'
import Header from "./Header";
import Footer from "./Footer";

type layoutAdminProps = {
    children: ReactNode;
}

const LayoutAdmin:FC<layoutAdminProps> = ({ children }) => (
  <>
    <Header/>
    {children}
    <Footer/>

  </>
);

export default LayoutAdmin;