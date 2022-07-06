import styled from "styled-components"

interface img {
  avatar: string
}

export const ChatBlockPreview = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 23px 30px;
  background-color: #fff;
  border-bottom: 1.5px solid #DFE0EB;
`

export const Avatar = styled.div<img>`
  background: 50% 50% url(${({ avatar }) => avatar}) #fff no-repeat;
  background-size: contain;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 24px;
`

export const PreviewChatContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ChatLeftPartPreview = styled.div`
  display: flex;

`

export const PreviewChatRightPart = styled.div``
