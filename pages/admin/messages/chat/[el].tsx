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

const Chat = () => {
    const {query} = useRouter()
    const [messages, setMessages] = useState([])
    const [userName, setUserName] = useState("")
    useEffect(() => {
        const room = {
            roomId: query.el,
            userName: "Admin",
        }
        if (query.el) {
            socket.emit("ROOM:JOIN", room)
            getRoomData(room.roomId).then(data => {
                setMessages(data.messages)
                setUserName(data.roomOwner)
            })
        }
        socket.on("ROOM:NEW_MESSAGE", addMessage)
        return () => {
            socket.emit("ROOM:LEAVE", query.el)
        }
    }, [query])

    const onSendMessage = text => {
        const message = {
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

    const addMessage = message => {
        console.log(message)
        setMessages(currentValue => [...currentValue, ...message])
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
