import styled from "styled-components";
import { motion } from "framer-motion"

export const StyledButton = styled.button`
  border: none;
  background: none;
`

// export const ModalAnimatedWrapper = styled(motion.div)`
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 10;
// `

export const ModalAnimatedWrapper = styled(motion.div)`
  position: absolute;
  border: 1px solid gray;
  width: 100%;
  height: 100vh;
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