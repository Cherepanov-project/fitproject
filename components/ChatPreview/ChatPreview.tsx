import {
    ChatBlockPreview,
    PreviewChatContent,
    ChatLeftPartPreview,
    PreviewChatRightPart,
    PreviewMessage
} from "./ChatPreview.style"
import format from 'date-fns/format'

const ChatPreview = ({username, lastMsg, date}) => {
    return(
        <ChatBlockPreview>
            <ChatLeftPartPreview>
                <PreviewChatContent>
                    <b>{username}</b>
                    <PreviewMessage>{lastMsg}</PreviewMessage>
                </PreviewChatContent>
            </ChatLeftPartPreview>
            <PreviewChatRightPart>
                <div>{date && format(new Date(date),"PP")}</div>
            </PreviewChatRightPart>
        </ChatBlockPreview>
    )
}

export default ChatPreview