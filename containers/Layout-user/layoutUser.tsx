import React from "react"

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

export const UserLayout: React.FC<layoutUserProps> = ({ children }) => {
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
