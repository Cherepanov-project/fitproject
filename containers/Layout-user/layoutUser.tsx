import React, {FunctionComponent, useEffect} from "react"

import {layoutUserProps} from "./layoutUser.interface"
import LeftSideBar from "./Navbar/leftSideBar"
import {RightSideBar} from "./Userbar/rightSideBar"
import {
    StyledLayoutUser,
    Container,
    Content,
    ContentWrapper,
    TopInput
} from "./layoutUser.styles"
// font
import {FontInter} from "@/utils/fonts/fontStyles"

import {socket} from "@/utils/chatsConfig/default"
import Notification from "@/components/Notification/Notification";

export const RequiredLayout: React.FC<layoutUserProps> = ({
                                                              children,
                                                          }): JSX.Element => {
    return (
        <>
            <StyledLayoutUser>
                <Container>
                    <FontInter/>
                    <LeftSideBar/>
                    <ContentWrapper>
                        <TopInput type="text" placeholder="Search Activities, messages"/>
                        <Content>
                            <main>{children}</main>
                        </Content>
                    </ContentWrapper>
                    <RightSideBar
                        avatar={undefined}
                        userName={"User"}
                        includeSeconds={true}
                    />
                </Container>
            </StyledLayoutUser>
        </>
    )
}

export const LayoutUser = <T extends Record<string, undefined>>(
    Component: FunctionComponent<T>
) => {
    return function withLayoutComponent(props: T): JSX.Element {

        useEffect(() => {
            const room = {
                roomId: "1", //Заменить на user ID
                userName: "User", //Заменить на userName
            }
            socket.emit("ROOM:USER_JOIN", room)
        }, [])
        return (
            <RequiredLayout>
                <Notification role="user"/>
                <Component {...props} />
            </RequiredLayout>
        )
    }
}
