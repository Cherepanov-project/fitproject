import { withLayout } from "../../../containers/Layout-admin/layoutAdmin"
import ChatPreview from "../../../components/ChatPreview/ChatPreview"
import {chatsList} from "../../../models/chatsList/chatsList"
import {ChatsPreviewsContainer, CustomLink} from "./chats.style"
import Link from "next/link"
import { useEffect } from "react"

const ChatsList = () => {
    useEffect(()=>{
        // делаем загрузку списка чатов, 
        // сейчас она локально здесь ../../../models/chatsList/chatsList
    },[])
    let sortedList = chatsList.sort((a,b)=>{return b.date-a.date})
    const chatsPreviews = sortedList.map((chatPreviewContent)=>(
            <Link key={chatPreviewContent.userId} href={`/admin/messages/chat/${chatPreviewContent.userId}`} passHref>      
                <CustomLink>
                    <ChatPreview  {...chatPreviewContent} />
                </CustomLink>
            </Link>
        )
    )
    return (
    <ChatsPreviewsContainer>
        {chatsPreviews}
    </ChatsPreviewsContainer>
    )
}

export default withLayout(ChatsList)