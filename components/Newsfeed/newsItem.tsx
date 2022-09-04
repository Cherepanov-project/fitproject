import React from 'react';
import styled from "styled-components";

const Item = styled.div`
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


const NewsItem = (props: {[index: string]:any}) => {
  
  function formater(text) {
    const re = /&quot;/gi;
    return text.replace(re, ' ')
  }
  
  return (
    <Item {...props}>
      <p style={{color: '#4138D0', fontSize: '18px'}}>{props.properties.title}</p>
      <p style={{color: '#858585', fontSize: '10px', lineHeight: '20px', paddingLeft: '4px'}}>{props.properties.date}</p>
      <p style={{fontSize: '14px'}}>{formater(props.properties.descr)}</p>
    </Item>
  )
};

export default NewsItem