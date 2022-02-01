import Header from "./Header";
import Footer from "./Footer";

const LayoutAdmin = ({ children }) => (
  <>
    <Header/>
    {children}
    <Footer/>

  </>
);

export default LayoutAdmin;