import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import { useRouter } from "next/router"
import {useEffect, useRef, useState} from "react"
import {chats} from "@/models/chatsList/chats"
import { formatDistanceStrict } from 'date-fns'
import {ChatHeader, ChatHeaderContent, ChatBody, Avatar, ChatItem } from "@/styles/admin/messages/Chat.style"
import SendMsgForm from "@/components/SendMsgForm/SendMsgForm"
import io, { Socket } from "socket.io-client";
import { SOCKET_URL } from "@/utils/chatsConfig/default";
import EVENTS from "@/utils/chatsConfig/events";
import {formatMsgTime} from "@/utils/formatMsg";
import {executeScroll} from "@/utils/scroll";

// remove after api realisation. Begin
function getUserById(userId){
    return chats.find(el => el.userId === userId)
}
// remove after api realisation. End

const socket = io(SOCKET_URL);

const Chat = () => {
    let path = useRouter()
    let chat = getUserById(Number(path.query.el))
    let [messages, setMessages] = useState([])

    useEffect(()=>{
        if(scrollRef.current){
            executeScroll(scrollRef.current)
        }
    },[messages])
    const scrollRef = useRef(null)

    useEffect(()=>{
        setMessages(chat?.messages)
        socket.emit(EVENTS.CLIENT.CREATE_ROOM, {userId:path.query.el});
        socket.on(EVENTS.SERVER.ROOM_MESSAGE, ({ msg, date, id }) => {
            setMessages((messages) => {
                let newArr = messages.map((val) => ({ ...val }))
                newArr.push({mess:msg, date, id})
                return newArr
            });
        });
    },[path.query.el])

    // ответное сообщение,
    // сейчас никак не обрабатывается
    // у пользователя
    function handleSendMsg(msg: string): void{
        if (!String(msg).trim()) {return}
        let userId = path.query.el;
        socket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, { userId, msg });
    }
    let lastSeen = `last seen ${chat?formatDistanceStrict(
        new Date(chat?.lastSeen),
        new Date()
    ):""} ago`

    let messagesMarkup = messages?.map((value)=>{
        return (
            <ChatItem key={value.id}>
                <b>{(value.author?'admin':chat.username) +" - "+ formatMsgTime(value.date)}</b>
                <div style={{marginTop:'10px'}}>{value.mess}</div>
            </ChatItem>
        )
    })

    return (
        <>
            <ChatHeader>
                <Avatar avatar={chat?.avatar}/>
                <ChatHeaderContent>
                    <b>{chat?.username}</b>
                    <div>{lastSeen}</div>
                </ChatHeaderContent>
            </ChatHeader>
            <ChatBody>
                {messagesMarkup}
                <div ref={scrollRef}></div>
                <SendMsgForm onSubmitHandler={handleSendMsg}/>
            </ChatBody>
        </>
    )
}

export default withLayout(Chat)