import React, {useEffect, useRef, useState} from 'react';
import {LayoutUser} from "@/containers/Layout-user/layoutUser";
import {ChatBody, ChatHeader, ChatHeaderContent, ChatItem, ChatMessages} from "@/components/Message/message.styles";
import SendMsgForm from "@/components/SendMsgForm/SendMsgForm";
import {executeScroll} from "@/utils/scroll";
import {socket} from '@/utils/chatsConfig/default'
import axios from "axios";


const Chat = () => {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        const connect = async () => {
            const obj = {
                roomId: '1',//Заменить на user ID
                userName: 'User'//Заменить на userName
            }
            await axios.post('http://localhost:9999/rooms',obj)
            socket.emit('ROOM:JOIN', obj)
            const {data} = await axios.get(`http://localhost:9999/rooms/${obj.roomId}`)
            setMessages(data.messages)
        }
        connect()
    }, [])
    useEffect(() => {
        socket.on('ROOM:NEW_MESSAGE', addMessage)
    }, [])

    const onSendMessage = (text) => {
        socket.emit('ROOM:NEW_MESSAGE',{
            userName: 'User',
            roomId: '1',
            text
        })
        console.log(messages)
        setMessages([...messages, ...[{userName: 'Alexander', text}]])
    }


    const addMessage = message => {
        console.log(messages)
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
    );
};

export default LayoutUser(Chat)