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
import {addRoom, getRoomData} from "@/API/messages"
import {formatMsgTime} from "@/utils/formatMsg";

const Chat = () => {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        const room = {
            roomId: "1", //Заменить на user ID
            userName: "User", //Заменить на userName
        }
        addRoom(room).then()
        socket.emit("ROOM:JOIN", room)
        getRoomData(room.roomId).then(data => setMessages(data.messages))
        socket.on("ROOM:NEW_MESSAGE", addMessage)
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
        setMessages([...messages, message])
    }

    const addMessage = message => {
        setMessages(currentValue => [...currentValue, ...message])
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
