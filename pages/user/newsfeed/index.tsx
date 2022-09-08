import React, { useEffect, useState } from 'react';
import NewsItem from "@/components/Newsfeed/newsItem";
import { Layout } from "@/components/Newsfeed/newsfeed.styles";
import { IFeed } from "@/components/Newsfeed/newsfeed.interface";
import { LayoutUser } from "@/containers/Layout-user/layoutUser"
import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken"


declare global {
  interface Window {
    m_sport: []
  }
}

export const NewsfeedLayout = () => {

  const [feed, setFeed] = useState([]);


  useEffect(() => {
    // fetch('https://newsdata.io/api/1/news?apikey=pub_10994629523bc981a2ed9e4df92ec7ac7e9c2&q=sports&country=ru')
    //   .then((data) => data.json())
    //   .then((data) => {
    //     console.log(data);
    //     setFeed(data.articles)
    //   });
    const RSS_URL = `https://api.allorigins.win/raw?url=https://www.gazeta.ru/export/rss/sport.xml`;

    fetch(RSS_URL)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => console.log(data))

    const script = document.createElement('script')
    const body = document.getElementsByTagName('body')[0]
    script.src = 'https://news.yandex.ru/ru/sport.utf8.js'
    body.appendChild(script)
    script.addEventListener('load', () => {
      console.log(feed);
      setFeed(window.m_sport);
    })
  }, [])

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