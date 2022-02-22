import React, {FC, ReactNode, useState, useEffect} from 'react'
import Router from 'next/router'
// OTHER LIBRARIES
import styled from 'styled-components';
import Cookies from 'js-cookie';
import {ThemeProvider, createTheme} from '@mui/material/styles';
// CUSTOM COMPONENTS
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


const theme = createTheme({
    palette: {
        primary: {
            main: '#3751FF',
        },
        secondary: {
            main:'#363740'
        },
    },
    typography:{
        fontFamily: "inherit",
        fontWeightLight:400,
        fontWeightRegular:500,
        fontWeightMedium:600,
        fontWeightBold:700,
    }
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

    return function withLayoutComponent(props){
        useEffect(() => {
            if (!Cookies.get('auth-token')) {
                console.log('tok')
                Router.replace('/admin')
            }
        }, []);

        return (
            <LayoutAdmin>
                <Component {...props}/>
            </LayoutAdmin>
        )
    }
}

