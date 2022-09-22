import styled from "styled-components";
import { motion } from "framer-motion"

export const StyledButton = styled.button`
  border: none;
  background: none;
`

export const ModalAnimatedWrapper = styled(motion.div)`
  position: fixed;
  border: 1px solid gray;
  width: 66%;
  height: 100vh;
  background-color: #fff;
  border-radius: 10px;
  z-index: 10;
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