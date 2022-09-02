import styled from "styled-components"

interface img {
    avatar: string
}

export const ChatHeader = styled.div`
  display:flex;
  justify-content: flex-start;
  padding: 23px 30px;
  background-color: #fff;
  border: 1.5px solid #DFE0EB;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`

export const ChatHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Avatar = styled.div<img>`
  background: 50% 50% url(${({ avatar }) => avatar}) #fff no-repeat;
  background-size: contain;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 24px;
`

export const ChatBody = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 23px 30px;
  background-color: #fff;
  border: 1.5px solid #DFE0EB;
  max-height: 65vh;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
`
export const ChatMessages = styled.div`
  overflow-y: auto;
  height: 370px;
`

export const ChatItem = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 23px;
  background-color: #fff;
  border: 1.5px solid #DFE0EB;
`
export const StyleLoaderContainer = styled.div`
  width: 100%;
  margin: 25% 50%;
`