import styled from "styled-components";

export const StyledNewsTitle = styled.p`
  color: #4138D0;
  font-size: 18px;
`

export const StyledNewsDate = styled.p`
  color: #858585; 
  font-size: 10px; 
  line-height: 26px; 
  padding-left: 4px;
`

export const StyledNewsBody = styled.p`
  font-size: 14px;
`

export const StyledNewsItem = styled.div`
  position: relative;
  margin: 0;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  // grid-row-end: ${(props: {[index: string]:any}) => props.size};
  // grid-column-end: ${(props: {[index: string]:any}) => props.widthSize};
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
    grid-row-end: span 18;
    grid-column-end: span 1;
  }
  &:nth-child(2n) {
    grid-row-end: span 12;
    grid-column-end: span 1;
  }
  &:nth-child(3n) {
    grid-row-end: span 14;
    grid-column-end: span 1;
  }
  &:nth-child(4n) {
    grid-row-end: span 16;
    grid-column-end: span 1;
  }
  &:nth-child(5n) {
    grid-row-end: span 18;
    grid-column-end: span 1;
  }
  &:last-child {
    grid-row-end: span 18;
    grid-column-end: span 4;
  }
`