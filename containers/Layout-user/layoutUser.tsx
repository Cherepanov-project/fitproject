import React, { FunctionComponent } from "react"

import { layoutUserProps } from "./layoutUser.interface"
import LeftSideBar from "./Navbar/leftSideBar"
import { RightSideBar } from "./Userbar/rightSideBar"
import { Container, Content, ContentWrapper, TopInput } from "./layoutUser.styles"

export const RequiredLayout: React.FC<layoutUserProps> = ({ children }): JSX.Element => {
    return (
        <>
            <Container>
                <LeftSideBar />
                <ContentWrapper>
                    <TopInput
                        type="text"
                        placeholder="Search Activities, messages"
                    />
                    <Content>
                        <main>{children}</main>
                    </Content>
                </ContentWrapper>
                <RightSideBar
                    avatar={undefined}
                    userName={"kek"}
                    includeSeconds={true}
                />
            </Container>
        </>
    )
}

export const LayoutUser = <T extends Record<string, undefined>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <RequiredLayout>
                <Component {...props} />
            </RequiredLayout>
        )
    }
}
