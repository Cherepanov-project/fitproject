import React, { FunctionComponent } from "react"

import { layoutUserProps } from "./layoutUser.interface"
import LeftSideBar from "./Navbar/leftSideBar"
import { RightSideBar } from "./Userbar/rightSideBar"
import SendMsgForm from "../../components/SendMsgForm/SendMsgForm"
import {
    Container,
    Content,
    ContentWrapper,
    TopInput,
    ChatWithAdmin
} from "./layoutUser.styles"

import io, { Socket } from "socket.io-client";
import { SOCKET_URL } from "../../utils/chatsConfig/default";
import EVENTS from "../../utils/chatsConfig/events";

const userId="124"
// это id пользователя Julia из раздела Messages
// сейчас реализована возможность написать админу сообщение
// от этого пользователя
// сообщение дублируется, но эта проблема всего проекта, 
// с которой надо разобраться.

// userId должен содержаться после авторизации пользователя 
// в куках или локал сторадже
const socket = io(SOCKET_URL);

function handleSendMsg(msg: string): void{

    if (!String(msg).trim()) {return}

    // init new chat
    socket.emit(EVENTS.CLIENT.CREATE_ROOM, { userId });
    socket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, { userId, msg });
}

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
                <ChatWithAdmin>
                    <SendMsgForm onSubmitHandler={handleSendMsg}/>
                </ChatWithAdmin>
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
