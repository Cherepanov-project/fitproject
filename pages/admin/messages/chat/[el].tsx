import { withLayout } from "../../../../containers/Layout-admin/layoutAdmin"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import {chats} from "../../../../models/chatsList/chats"
import { formatDistanceStrict } from 'date-fns'
import {ChatHeader, ChatHeaderContent, ChatBody, Avatar, ChatItem, ChatFooter,ChatFooterInput } from "./Chat.style"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

// remove after api realisation. Begin
function getUserById(userId){
  return chats.find(el => el.userId === userId)
}
// remove after api realisation. End

function formatMsgTime(ms){
  let localDate = new Date(ms)
  let hours = localDate.getHours()
  let minutes = localDate.getMinutes()<10?'0'.concat(localDate.getMinutes().toString()):localDate.getMinutes()
  return hours+':'+minutes
}

const Chat = () => {
  let path = useRouter()
  let chat = getUserById(Number(path.query.el))
  let lastSeen = `last seen ${chat?formatDistanceStrict(
    new Date(chat?.lastSeen),
    new Date()
  ):""} ago`

  let messages = chat?.messages.map((value,index)=>{
    return (
      <ChatItem key={value.id}>
        <b>{(value.author?'admin':chat.username) +" - "+ formatMsgTime(value.date)}</b>
        <div style={{marginTop:'10px'}}>{value.mess}</div>
      </ChatItem>
    )
  })
  
  useEffect(()=>{
    // делаем запрос на сервер: по userId из url строки, 
    // достаём переписку с этим пользователем
    // нужен get запрос: по id пользователя
    // получить переписку с ним, формат одной переписки как 
    // один элемент в массиве переписок
  },[])
  
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
        {messages}
        <ChatFooter>
          <ChatFooterInput
            rows={2}
            placeholder="Напишите сообщение ..."
          />
          <Button sx = {{minWidth:'135px', maxHeight:'30px', backgroundColor:"#7f8084", "&.MuiButtonBase-root:hover": {
                bgcolor: "#7f8084"
              }}} variant="contained" size='small' endIcon={<SendIcon />}>
            Отправить
          </Button>      
        </ChatFooter>
      </ChatBody>
      
    </>
  )
}

export default withLayout(Chat)

