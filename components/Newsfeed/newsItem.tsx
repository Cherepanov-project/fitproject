import React from 'react';
import {StyledNewsBody, StyledNewsDate, StyledAnimatedNewsItem, StyledNewsTitle} from './newsItem.styles'

const NewsItem = (props: {[index: string]:any}) => {

  const {title, publishedAt, description} = props.properties

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
            data-alt='newsItem'
            {...props}>
              <StyledNewsTitle>{title}</StyledNewsTitle>
              <StyledNewsDate>{publishedAt}</StyledNewsDate>
              <StyledNewsBody>{description}</StyledNewsBody>
          </StyledAnimatedNewsItem>
      </>
  )
};

export default NewsItem