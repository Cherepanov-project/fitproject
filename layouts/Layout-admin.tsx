import React, {FC, ReactNode, useState} from 'react'
import styled from 'styled-components';
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

type layoutAdminProps = {
    children: ReactNode;
}

const Container = styled.div`
  display: flex;
  width: 1440px;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  background-color: #F7F8FC;
`;


const LayoutAdmin: FC<layoutAdminProps> = ({children}) => {


    const [pageName, setPageName] = useState('');

    return (
        < Container>
            <Sidebar/>
            <Content>
                <header>
                    < Navbar/>
                </header>
                <main>
                    {children}
                </main>
            </Content>
        </Container>
    );
}

export default LayoutAdmin;

export const withLayout = (Component) => {


    class LayoutAdminComponent extends React.Component {
        render() {
            return (
                <LayoutAdmin>
                    <Component {...this.props}/>
                </LayoutAdmin>
            );
        }
    }

    return LayoutAdminComponent;
}