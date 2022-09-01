import {ChatBlockPreview, Avatar, PreviewChatContent, ChatLeftPartPreview, PreviewChatRightPart} from "./ChatPreview.style"
import format from 'date-fns/format'

const ChatPreview = ({username, lastMsg, date}) => {
    return(
        <ChatBlockPreview>
            <ChatLeftPartPreview>
                <PreviewChatContent>
                    <b>{username}</b>
                    <div>{lastMsg}</div>
                </PreviewChatContent>
            </ChatLeftPartPreview>
            <PreviewChatRightPart>
                <div>{format(new Date(date),"PP")}</div>
            </PreviewChatRightPart>
        </ChatBlockPreview>
    )
}

export default ChatPreview