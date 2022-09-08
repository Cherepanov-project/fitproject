import React, { useEffect, FunctionComponent } from "react"
import Router from "next/router"
import Cookies from "js-cookie"
import { ThemeProvider, createTheme } from "@mui/material/styles"

import Sidebar from "@/containers/Layout-admin/Sidebar/sidebar"
import { Navbar } from "@/containers/Layout-admin/Navbar/navbar"
import { Container, Content, MainContainer } from "@/containers/Layout-admin/layoutAdmin.styles"
import { layoutAdminProps } from "@/containers/Layout-admin/layoutAdmin.interface"
import { ACCESS_TOKEN } from "@/constants/titles"
import { Normalize } from "styled-normalize";
import { FontStyles } from "@/utils/fonts/fontStyles";
import ErrorBoundary from "@/components/ErrorBoundary/errorBoundary"
import {socket} from "@/utils/chatsConfig/default";
import Notification from "@/components/Notification/Notification";
import {Role} from "@/models/role/role";

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
                    <MainContainer>
                        <Normalize />
                        <FontStyles />
                        {children}
                    </MainContainer>
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
        useEffect(() => {
            const room = {
                roomId: "ADMIN_ROOM"
            }
            socket.emit("ROOM:JOIN", room)
        }, [])

        return (
            <ErrorBoundary>
                <LayoutAdmin>
                    <Notification role={Role.ADMIN}/>
                    <Component {...props} />
                </LayoutAdmin>
            </ErrorBoundary>
        )
    }
}
