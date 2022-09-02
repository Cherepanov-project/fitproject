import React, {useState} from "react"
import {withLayout} from "@/containers/Layout-admin/layoutAdmin"
import {useQuery} from "react-query"
import {
    ChatsPreviewsContainer,
    CustomLink,
    StyleLoaderContainer
} from "@/styles/admin/messages/chats.style"
import Link from "next/link"
import ChatPreview from "@/components/ChatPreview/ChatPreview"
import {getRooms} from "@/API/messages"
import CircularProgress from "@mui/material/CircularProgress";
import {IRoomFullData} from "@/models/messages/messages";

const ChatsList = () => {
    const [rooms, setRooms] = useState<IRoomFullData[]>([])
    const {isLoading} = useQuery('roomsList', getRooms, {
        onSuccess: (rooms) => setRooms(rooms)
    })

    const chatsPreviews = rooms.map((chatPreviewContent) => (
            <Link key={chatPreviewContent.roomId} href={`/admin/messages/chat/${chatPreviewContent.roomId}`} passHref>
                <CustomLink>
                    <ChatPreview date={chatPreviewContent.messages[chatPreviewContent.messages.length - 1]?.date || ''}
                                 username={chatPreviewContent.roomOwner}
                                 lastMsg={chatPreviewContent.messages[chatPreviewContent.messages.length - 1]?.text || ''}></ChatPreview>
                </CustomLink>
            </Link>
        )
    )
    if (isLoading || rooms.length === 0) {
        return (
            <StyleLoaderContainer>
                <CircularProgress></CircularProgress>
            </StyleLoaderContainer>
        )
    }
    return (
        <ChatsPreviewsContainer>
            {chatsPreviews}
        </ChatsPreviewsContainer>
    )
}

export default withLayout(ChatsList)
