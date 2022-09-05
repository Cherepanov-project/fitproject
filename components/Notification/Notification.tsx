import React, {useEffect, useState} from 'react';
import { NotificationWrapper } from './Notification.styles';
import {socket} from "@/utils/chatsConfig/default";
import {useRouter} from 'next/router'

const Notification = () => {
    const [notification, setNotification] = useState('')
    const router = useRouter()
    console.log(router)
    const addNotification = (notification) => {
        setNotification(notification.text)
    }
    useEffect(() => {
        socket.on("ROOM:NEW_NOTIFICATION", addNotification)
        return () => {
            socket.off("ROOM:NEW_NOTIFICATION", addNotification)
        }
    }, [])
    if(notification && !(router.pathname.split('/')[2] === 'message')){
        return (
            <NotificationWrapper>
                <div>Вам новое сообщение!</div>
                <span>
                    {
                        notification
                    }
                </span>
            </NotificationWrapper>
        );
    }
    return <></>
};

export default Notification;