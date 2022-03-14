import React, {FC, ReactNode, useState, useEffect, FunctionComponent} from 'react'
import Router from 'next/router'
// OTHER LIBRARIES
import Cookies from 'js-cookie';
import {ThemeProvider, createTheme} from '@mui/material/styles';
// CUSTOM COMPONENTS
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

import {Container,Content} from "./layoutAdmin.styled";
import {layoutAdminProps} from "./layoutAdmin.interface";

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

const LayoutAdmin: FC<layoutAdminProps> = ({children}):JSX.Element => {

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

export const withLayout = <T extends Record<string, undefined>>(Component:FunctionComponent<T>) => {

    return function withLayoutComponent(props:T):JSX.Element{
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
