import React, {useEffect, useRef, useState} from 'react';
import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken";
import {LayoutUser} from "@/containers/Layout-user/layoutUser";
import {Avatar, ChatBody, ChatHeader, ChatHeaderContent, ChatItem} from "@/components/Message/message.styles";
import {chats} from "@/models/chatsList/chats";
import SendMsgForm from "@/components/SendMsgForm/SendMsgForm";
import {formatMsgTime} from "@/utils/formatMsg";
import {executeScroll} from "@/utils/scroll";

// remove after api realisation. Begin
function getUserById(userId){
    return chats.find(el => el.userId === userId)
}
// remove after api realisation. End
function handleSendMsg(msg: string): void{
    console.log(msg)
}
const Chat = () => {
    const [messages, setMessages] = useState([])
    const chat = getUserById(Number(124))
    useEffect(()=>{
        setMessages(chat?.messages)
    },[])
    useEffect(()=>{
        if(scrollRef.current){
            executeScroll(scrollRef.current)
        }
    },[messages])
    const scrollRef = useRef(null)
    const messagesMarkup = messages?.map((value)=>{
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
                    <b>Админ</b>
                </ChatHeaderContent>
            </ChatHeader>
            <ChatBody>
                {messagesMarkup}
                <div ref={scrollRef}></div>
                <SendMsgForm onSubmitHandler={handleSendMsg}/>
            </ChatBody>
        </>
    );
};

export default WithRefreshingToken(LayoutUser(Chat))