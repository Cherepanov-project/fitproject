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
  max-height: 335px;
  overflow-y: scroll; 
`
export const ChatFooter = styled.div`
  width:100%;
  display: flex;
  align-items: top;
`

export const ChatFooterInput = styled.textarea`
  width:100%;
  margin-right:15px;
  border: 1.5px solid #DFE0EB;
  padding: 10px;
`

export const ChatItem = styled.div`
  padding: 10px;
  margin-bottom: 23px;
  background-color: #fff;
  border: 1.5px solid #DFE0EB;
`