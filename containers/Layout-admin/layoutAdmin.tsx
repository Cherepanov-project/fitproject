import React, { useEffect, FunctionComponent } from "react"
import Router from "next/router"
import Cookies from "js-cookie"
import { ThemeProvider, createTheme } from "@mui/material/styles"

import Sidebar from "./Sidebar/sidebar"
import { Navbar } from "./Navbar/navbar"
import { Container, Content, MainContainer } from "./layoutAdmin.styles"
import { layoutAdminProps } from "./layoutAdmin.interface"
import { ACCESS_TOKEN } from "../../constants/titles"
const theme = createTheme({
    palette: {
        primary: {
            main: "#3751FF",
        },
        secondary: {
            main: "#363740",
        },
    },
    typography: {
        fontFamily: "inherit",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
})

export const LayoutAdmin: React.FC<layoutAdminProps> = ({
    children,
}): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Sidebar />
                <Content>
                    <header>
                        <Navbar />
                    </header>
                    <MainContainer>{children}</MainContainer>
                </Content>
            </Container>
        </ThemeProvider>
    )
}

export const withLayout = <T extends Record<string, undefined>>(
    Component: FunctionComponent<T>
) => {
    return function WithLayoutComponent(props: T): JSX.Element {
        useEffect(() => {
            if (!Cookies.get(ACCESS_TOKEN)) {
                console.log("tok")
                Router.replace("/admin")
            }
        }, [])

        return (
            <LayoutAdmin>
                <Component {...props} />
            </LayoutAdmin>
        )
    }
}
