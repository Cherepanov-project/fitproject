import React, {useEffect, useRef, useState} from 'react';
import { NotificationWrapper } from './Notification.styles';
import {socket} from "@/utils/chatsConfig/default";
import {useRouter} from 'next/router'
import Link from "next/link";

const Notification = ({role}: {role: 'user' | 'admin'}) => {
    const [notification, setNotification] = useState('')
    const [roomId, setRoomId] = useState('')
    const router = useRouter()
    const timerRef = useRef<ReturnType<typeof setTimeout>>()
    const addNotification = (notification) => {
        setRoomId(notification.roomId || '')
        clearTimeout(timerRef.current)
        setNotification(notification.text)
        timerRef.current = setTimeout(() => setNotification(''), 6000)

    }
    useEffect(() => {
        if(role === 'user'){
            socket.on("ROOM:USER_NOTIFICATION", addNotification)
        }else if(role === 'admin'){
            socket.on("ROOM:ADMIN_NOTIFICATION", addNotification)
        }

        return () => {
            if(role === 'user'){
                socket.off("ROOM:USER_NOTIFICATION", addNotification)
            }else if(role === 'admin'){
                socket.on("ROOM:ADMIN_NOTIFICATION", addNotification)
            }

        }
    }, [])
    if(notification && !(router.pathname.split('/')[2] === 'message') && !(router.pathname.split('/')[2] === 'messages')){
        return (
            <Link href={role === 'user' ? `/user/message` : `/admin/messages/chat/${1}`} passHref>
                <NotificationWrapper>
                    <div>Вам новое сообщение!</div>
                    <span>
                    {
                        notification
                    }
                </span>
                </NotificationWrapper>
            </Link>
        );
    }
    return <></>
};

export default Notification;