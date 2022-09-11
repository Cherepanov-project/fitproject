import React, {useState} from 'react';
import {StyledNewsBody, StyledNewsDate, StyledAnimatedNewsItem, StyledNewsTitle} from './newsItem.styles'

const NewsItem = (props: {[index: string]:any}) => {

  return (
      <>
          <StyledAnimatedNewsItem
            initial="pageInital"
            animate="pageAnimate"
            variants={{
              pageInital: {
                opacity: 0,
                y: -200,
              },
              pageAnimate: {
                opacity: 1,
                y: 0,
              },
            }}
            {...props}>
              <StyledNewsTitle>{props.properties.title}</StyledNewsTitle>
              <StyledNewsDate>{props.properties.date}</StyledNewsDate>
              <StyledNewsBody>{props.properties.descr}</StyledNewsBody>
          </StyledAnimatedNewsItem>
      </>
  )
};

export default NewsItem