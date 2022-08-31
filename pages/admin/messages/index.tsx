import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import {ChatsPreviewsContainer, CustomLink} from "@/styles/admin/messages/chats.style"
import Link from "next/link"
import {useEffect, useState} from "react";
import axios from "axios";
const ChatsList = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        const connect = async () => {
            const {data} = await axios.get(`http://localhost:9999/rooms`)
            setRooms(data)
            console.log(data)
        }
        connect()
    }, [])

    const chatsPreviews = rooms.map((chatPreviewContent)=>(
            <Link key={chatPreviewContent.roomId} href={`/admin/messages/chat/${chatPreviewContent.roomId}`} passHref>
                <CustomLink>
                    <div>
                        User:{chatPreviewContent.roomOwner}
                    </div>
                    <div>
                        Last message:{chatPreviewContent.messages[chatPreviewContent.messages.length-1].text}
                    </div>
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