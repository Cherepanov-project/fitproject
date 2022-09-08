import {withLayout} from "@/containers/Layout-admin/layoutAdmin"
import React, {useEffect, useRef, useState} from "react"
import {
    ChatHeader,
    ChatHeaderContent,
    ChatBody,
    ChatItem,
    ChatMessages,
} from "@/styles/admin/messages/Chat.style"
import SendMsgForm from "@/components/SendMsgForm/SendMsgForm"
import {executeScroll} from "@/utils/scroll"
import {socket} from "@/utils/chatsConfig/default"
import {useRouter} from "next/router"
import {getRoomData} from "@/API/messages"
import {formatMsgTime} from "@/utils/formatMsg";
import {useQuery} from "react-query";
import {StyleLoaderContainer} from "@/styles/admin/messages/chats.style";
import CircularProgress from "@mui/material/CircularProgress";
import {Message} from "@/models/messages/messages";

const Chat = () => {
    const {query} = useRouter()
    const [messages, setMessages] = useState<Message[]>([])
    const [userName, setUserName] = useState("")
    const {isLoading, refetch} = useQuery('roomData', () => getRoomData(String(query.el)), {
        enabled:false,
        onSuccess: (room) => {
            setMessages(room.messages)
            setUserName(room.roomOwner)
        }
    })
    useEffect(() => {
        socket.on("ROOM:NEW_MESSAGE", addMessage)
        return () => {
            socket.off("ROOM:NEW_MESSAGE", addMessage)
            socket.emit("ROOM:LEAVE", query.el)
        }
    }, [])
    useEffect(() => {
        const room = {
            roomId: query.el,
            userName: "Admin",
        }
        if(query.el) {
            socket.emit("ROOM:JOIN", room)
            refetch()
        }
    }, [query])

    const onSendMessage = text => {
        const message:Message = {
            userName: "Admin",
            text,
            date: new Date()
        }
        socket.emit("ROOM:NEW_MESSAGE", {
            ...message,
            roomId: query.el
        })
        setMessages([...messages, message])
    }

    const addMessage = (message: Message) => {
        setMessages(currentValue => [...currentValue, message])
    }
    useEffect(() => {
        if (scrollRef.current) {
            executeScroll(scrollRef.current)
        }
    }, [messages])
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
    if (isLoading) {
        return (
            <StyleLoaderContainer>
                <CircularProgress></CircularProgress>
            </StyleLoaderContainer>
        )
    }
    return (
        <>
            <ChatHeader>
                <ChatHeaderContent>
                    <b>{userName}</b>
                </ChatHeaderContent>
            </ChatHeader>
            <ChatBody>
                <ChatMessages>
                    {messagesMarkup}
                    <div ref={scrollRef}></div>
                </ChatMessages>
                <SendMsgForm onSubmitHandler={onSendMessage}/>
            </ChatBody>
        </>
    )
}

export default withLayout(Chat)
