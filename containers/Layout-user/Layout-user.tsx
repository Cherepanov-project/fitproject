import React, { FunctionComponent } from "react"

import { layoutUserProps } from "./LayoutUser.interface"
import LeftSideBar from "./Navbar/LeftSideBar"
import { RightSideBar } from "./Userbar/RightSideBar"
import {
    Container,
    Content,
    ContentWrapper,
    TopInput,
} from "./LayoutUser.style"

const RequiredLayout: React.FC<layoutUserProps> = ({
    children,
}): JSX.Element => {
    return (
        <>
            <Container>
                <LeftSideBar />
                <ContentWrapper>
                    <TopInput
                        type="text"
                        placeholder="Search Activites, messages"
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

const LayoutUser = <T extends Record<string, undefined>>(
    Component: FunctionComponent<T>
) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <RequiredLayout>
                <Component {...props} />
            </RequiredLayout>
        )
    }
}

export { LayoutUser, RequiredLayout }
