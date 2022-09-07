import React, {useState} from 'react';
import {StyledNewsBody, StyledNewsDate, StyledNewsItem, StyledNewsTitle} from './newsItem.styles'
import Modal from "@/components/Newsfeed/Modal/Modal";

const NewsItem = (props: {[index: string]:any}) => {

  const [showModal, setShowModal] = useState(false);
  const [feed, setFeed] = useState([]);

  function fullFeedHandler(url) {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.')
    })
    .then(data => {
      let proxy = [];
      let snippets: any = new DOMParser().parseFromString(data.contents, "text/html").querySelectorAll('.mg-snippet__text')
      snippets = [...snippets]
      snippets.forEach((item) => {
        proxy.push(item.innerHTML)
      })
      setFeed(proxy);
    });
    setShowModal(true)
  }
  
  return (
      <>
          <StyledNewsItem {...props} onClick={() => fullFeedHandler(props.properties.url)}>
              <StyledNewsTitle>{props.properties.title}</StyledNewsTitle>
              <StyledNewsDate>{props.properties.date}</StyledNewsDate>
              <StyledNewsBody>{props.properties.descr}</StyledNewsBody>
          </StyledNewsItem>
          <Modal onClose={() => setShowModal(false)} show={showModal} feed={feed}/>
      </>
  )
};

export default NewsItem