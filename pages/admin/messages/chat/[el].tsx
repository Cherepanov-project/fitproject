import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import React, {useEffect, useRef, useState} from "react"
import {ChatHeader, ChatHeaderContent, ChatBody, Avatar, ChatItem, ChatMessages } from "@/styles/admin/messages/Chat.style"
import SendMsgForm from "@/components/SendMsgForm/SendMsgForm"
import {executeScroll} from "@/utils/scroll";
import axios from "axios";
import {socket} from "@/utils/chatsConfig/default";
import {useRouter} from "next/router";

const Chat = () => {
    const {query} = useRouter()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        const connect = async () => {
            const obj = {
                roomId: query.el,
                userName: 'Admin'
            }
            if(query.el){
                socket.emit('ROOM:JOIN', obj)
                const {data} = await axios.get(`http://localhost:9999/rooms/${obj.roomId}`)
                setMessages(data.messages)
            }
        }
        socket.on('ROOM:NEW_MESSAGE', addMessage)
        connect()
        return () => {
            socket.emit('ROOM:LEAVE', query.el)
        }
    }, [query])

    const onSendMessage = (text) => {
        socket.emit('ROOM:NEW_MESSAGE',{
            userName: 'Admin',
            roomId: query.el,
            text
        })
        setMessages([...messages, ...[{userName: 'Admin', text}]])
    }

    const addMessage = message => {
        setMessages(currentValue => (
            [...currentValue, ...message]
        ))
    }
    useEffect(()=>{
        if(scrollRef.current){
            executeScroll(scrollRef.current)
        }
    },[messages])
    const scrollRef = useRef(null)
    const messagesMarkup = messages?.map((value, index)=>{
        return (
            <ChatItem key={value.userName + value.text + index}>
                <b>{(value.userName)}</b>
                <div style={{marginTop:'10px'}}>{value.text}</div>
            </ChatItem>
        )
    })

    return (
        <>
            <ChatHeader>
                <ChatHeaderContent>
                    <b>{query.el}</b>
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
    );
};

export default withLayout(Chat)