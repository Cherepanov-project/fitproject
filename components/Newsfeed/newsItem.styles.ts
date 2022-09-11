import styled from "styled-components";
import { motion } from "framer-motion"

export const StyledNewsTitle = styled.p`
  color: #4138D0;
  font-size: 16px;
`

export const StyledNewsDate = styled.p`
  color: #858585; 
  font-size: 10px; 
  line-height: 26px; 
  padding-left: 4px;
`

export const StyledNewsBody = styled.p`
  font-size: 0.8rem;
`

export const StyledAnimatedNewsItem = styled(motion.div)`
  position: relative;
  margin: 0;
  padding: 12px;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  &::after {
    content: ' ';
    left: 0;
    bottom: -10px;
    position: absolute;
    width: 100%;
    height: 25px;
    z-index: 1;
    background: #fff;
    filter: blur(5px);
  }
  &:nth-child(1n) {
    grid-row-end: span 14;
  }
  &:nth-child(2n) {
    grid-row-end: span 8;
  }
  &:nth-child(3n) {
    grid-row-end: span 10;
  }
  &:nth-child(4n) {
    grid-row-end: span 12;
  }
  &:nth-child(5n) {
    grid-row-end: span 14;
  }
`