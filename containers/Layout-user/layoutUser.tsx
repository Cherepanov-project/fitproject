import React, { FunctionComponent } from "react"

import { layoutUserProps } from "./layoutUser.interface"
import LeftSideBar from "./Navbar/leftSideBar"
import { RightSideBar } from "./Userbar/rightSideBar"
import {
  StyledLayoutUser,
  Container,
  Content,
  ContentWrapper,
  TopInput,
} from "./layoutUser.styles"
// font
import { FontInter } from "@/utils/fonts/fontStyles"

export const RequiredLayout: React.FC<layoutUserProps> = ({
  children,
}): JSX.Element => {
  return (
    <>
      <StyledLayoutUser>
        <Container>
          <FontInter />
          <LeftSideBar />
          <ContentWrapper>
            <TopInput type="text" placeholder="Search Activities, messages" />
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
    return (
      <RequiredLayout>
        <Component {...props} />
      </RequiredLayout>
    )
  }
}
