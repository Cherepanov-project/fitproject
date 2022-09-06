import React, {useState} from 'react';
import styled from "styled-components";
import Modal from "@/components/Newsfeed/Modal/Modal";

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

  const [showModal, setShowModal] = useState(false);
  const [feed, setFeed] = useState('');

  function fullFeedHandler(desc) {
    // fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
    // .then(response => {
    //   if (response.ok) {
    //     return response.json();
    //   }
    //   throw new Error('Network response was not ok.')
    // })
    // .then(data => {
    //   console.log(data.contents)
    //   let proxy = [];
    //   let snippets: any = new DOMParser().parseFromString(data.contents, "text/html").querySelectorAll('.mg-snippet__text')
    //   snippets = [...snippets]
    //   snippets.forEach((item) => {
    //     // let p = document.createElement('p')
    //     // p.innerHTML = item.innerHTML
    //     proxy.push(snippets)
    //     // body.append(p)
    //     // body.append(document.createElement('p').append(item.innerHTML))
    //     console.log(item.innerHTML)
    //     setFeed(proxy);
    //   })
    // });
    console.log(desc);
    setFeed(desc)
    setShowModal(true)
  }
  
  return (
      <>
          <Item {...props} onClick={() => fullFeedHandler(props.properties.content)}>
              <p style={{color: '#4138D0', fontSize: '18px'}}>{props.properties.title}</p>
              <p style={{color: '#858585', fontSize: '10px', lineHeight: '20px', paddingLeft: '4px'}}>{props.properties.publishedAt}</p>
              <p style={{fontSize: '14px'}}>{props.properties.description}</p>
          </Item>
          <Modal onClose={() => setShowModal(false)} show={showModal} feed={feed}/>
      </>
  )
};

export default NewsItem