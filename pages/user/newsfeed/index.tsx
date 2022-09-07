import React, { useEffect, useState } from 'react';
import NewsItem from "@/components/Newsfeed/newsItem";
import styled from "styled-components";
import { LayoutUser } from "@/containers/Layout-user/layoutUser"
import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken"


declare global {
  interface Window {
    m_sport: []
  }
}

interface IFeed {
  date: string,
  descr: string,
  time: string,
  title: string,
  ts: number,
  url: string,
}

const Layout = styled.div`
  margin: 0;
  padding: 0;
  width: 64vw;
  height: 100%;
  background-color: #f1f1f1;
  display: grid;
  grid-template-columns: repeat(auto-fill, 260px);
  grid-auto-rows: 12px;
  gap: 10px;
  font-family: "Roboto";
  font-weight: 400;
`

export const NewsfeedLayout = () => {

  const [feed, setFeed] = useState([]);


  useEffect(() => {
    fetch('https://newsdata.io/api/1/news?apikey=pub_10994629523bc981a2ed9e4df92ec7ac7e9c2&q=sports&country=ru')
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        // setFeed(data.articles)
      });
    // const script = document.createElement('script')
    // const body = document.getElementsByTagName('body')[0]
    // script.src = 'https://news.yandex.ru/ru/sport.utf8.js'
    // body.appendChild(script)
    // script.addEventListener('load', () => {
    //   setFeed(window.m_sport);
    // })
  }, [])

  // console.log(feed);
  return (
    <Layout>
      {feed.map((item: IFeed) => {
          return <NewsItem
            key={item.ts}
            size={`span ${(Math.random()*16 + 16).toFixed()}`}
            widthSize={`span ${(Math.random()*4).toFixed()}`}
            properties={item}
          />
        })}
    </Layout>
  );
};

export default WithRefreshingToken(LayoutUser(NewsfeedLayout))