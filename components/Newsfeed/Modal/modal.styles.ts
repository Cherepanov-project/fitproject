import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  background: none;
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

export const ModalContent = styled.div`
  width: 500px;
  background-color: #fff;
  border-radius: 10px;
`


export const ModalHeader = styled.div`
  padding: 10px;
  text-align: center;
`

export const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`