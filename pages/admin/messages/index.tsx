import { withLayout } from "@/containers/Layout-admin/layoutAdmin"
import {
  ChatsPreviewsContainer,
  CustomLink,
} from "@/styles/admin/messages/chats.style"
import Link from "next/link"
import { useEffect, useState } from "react"
import ChatPreview from "@/components/ChatPreview/ChatPreview"
import { getRooms } from "@/API/messages"
const ChatsList = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    getRooms().then(data => setRooms(data))
  }, [])

  const chatsPreviews = rooms.map((chatPreviewContent)=>(
          <Link key={chatPreviewContent.roomId} href={`/admin/messages/chat/${chatPreviewContent.roomId}`} passHref>
            <CustomLink>
              <ChatPreview date={chatPreviewContent.messages[chatPreviewContent.messages.length-1].date} username={chatPreviewContent.roomOwner} lastMsg={chatPreviewContent.messages[chatPreviewContent.messages.length-1].text}></ChatPreview>
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
