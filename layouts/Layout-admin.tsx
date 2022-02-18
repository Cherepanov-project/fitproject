import React, {FC, ReactNode, useState} from 'react'
import styled from 'styled-components';
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import Router from 'next/router'
import Cookies from 'js-cookie';
import {ThemeProvider, createTheme} from '@mui/material/styles';

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


const theme = createTheme({
    palette: {
        primary: {
            main: '#3751FF',
        },
    },
});


const LayoutAdmin: FC<layoutAdminProps> = ({children}) => {


    return (
        <ThemeProvider theme={theme}>
            <Container>
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
        </ThemeProvider>
    )
}

export default LayoutAdmin;

export const withLayout = (Component) => {

    class LayoutAdminComponent extends React.Component {

        componentDidMount() {
            if (!Cookies.get('auth-token')) {
                console.log('tok')
                Router.replace('/admin')
            }
        }

        render() {
            return (

                <LayoutAdmin>
                    <Component {...this.props}/>
                </LayoutAdmin>

            )
        }
    }

    return LayoutAdminComponent;
}