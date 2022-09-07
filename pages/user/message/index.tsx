import React, {useEffect, useRef, useState} from "react"
import {LayoutUser} from "@/containers/Layout-user/layoutUser"
import {
    ChatBody,
    ChatHeader,
    ChatHeaderContent,
    ChatItem,
    ChatMessages,
} from "@/components/Message/message.styles"
import SendMsgForm from "@/components/SendMsgForm/SendMsgForm"
import {executeScroll} from "@/utils/scroll"
import {socket} from "@/utils/chatsConfig/default"
import {getRoomData} from "@/API/messages"
import {formatMsgTime} from "@/utils/formatMsg";
import {useQuery} from "react-query";
import {StyleLoaderContainer} from "@/styles/admin/messages/chats.style";
import CircularProgress from "@mui/material/CircularProgress";
import {IRoomBaseInfo, IRoomFullData, Message} from "@/models/messages/messages";

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([])
    const {isLoading} = useQuery('roomData', () => getRoomData('1'), {
        onSuccess: (room) => {
            setMessages(room.messages)
        }
    })
    useEffect(() => {
        socket.on("ROOM:NEW_MESSAGE", addMessage)
        return () => {
            socket.off("ROOM:NEW_MESSAGE", addMessage)
        }
    }, [])
    useEffect(() => {
        if (scrollRef.current) {
            executeScroll(scrollRef.current)
        }
    }, [messages])

    const onSendMessage = text => {
        const message = {
            userName: "User",//Заменить на userName
            text,
            date: new Date()
        }
        socket.emit("ROOM:NEW_MESSAGE", {
            ...message,
            roomId: "1"//заменить на User ID
        })
        socket.emit("ROOM:ADMIN_NOTIFICATION", {
            ...message,
            roomId: "ADMIN_ROOM"
        })
        setMessages([...messages, message])
    }

    const addMessage = (message:Message) => {
        setMessages(currentValue => [...currentValue, message])
    }

    const scrollRef = useRef(null)
    const messagesMarkup = messages?.map((value, index) => {
        return (
            <ChatItem key={value.userName + value.text + index}>
                <div>
                    <b>{value.userName}</b>
                    <div style={{marginTop: "10px"}}>{value.text}</div>
                </div>
                <div>{formatMsgTime(value.date)}</div>
            </ChatItem>
        )
    })
    return (
        <>
            <ChatHeader>
                <ChatHeaderContent>
                    <b>Админ</b>
                </ChatHeaderContent>
            </ChatHeader>
            <ChatBody>
                {
                    isLoading &&
                    <StyleLoaderContainer>
                        <CircularProgress></CircularProgress>
                    </StyleLoaderContainer>
                }
                <ChatMessages>
                    {messagesMarkup}
                    <div ref={scrollRef}></div>
                </ChatMessages>
                <SendMsgForm onSubmitHandler={onSendMessage}/>
            </ChatBody>
        </>
    )
}

export default LayoutUser(Chat)
