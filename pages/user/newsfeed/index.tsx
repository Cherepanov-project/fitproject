import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie"
import NewsItem from "@/components/Newsfeed/newsItem";
import { Layout } from "@/components/Newsfeed/newsfeed.styles";
import { IFeed } from "@/components/Newsfeed/newsfeed.interface";
import { LayoutUser } from "@/containers/Layout-user/layoutUser"
import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken"
import Modal from "@/components/Newsfeed/Modal/Modal";
import {ACCESS_TOKEN} from "@/constants/titles";
import {useRouter} from "next/router";


declare global {
  interface Window {
    m_sport: []
  }
}

export const NewsfeedLayout = (): JSX.Element => {


  const router = useRouter()
  const isLogin = Cookies.get(ACCESS_TOKEN) ? true : false
  const [feed, setFeed] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  useEffect(() => {
    if (!Cookies.get(ACCESS_TOKEN)) {
      router.push("/user")
    }
  }, [router])

  useEffect(() => {
    // fetch('https://newsdata.io/api/1/news?apikey=pub_10994629523bc981a2ed9e4df92ec7ac7e9c2&q=sports&country=ru')
    //   .then((data) => data.json())
    //   .then((data) => {
    //     console.log(data);
    //     setFeed(data.articles)
    //   });
    // const RSS_URL = `https://api.allorigins.win/raw?url=https://www.gazeta.ru/export/rss/sport.xml`;
    //
    // fetch(RSS_URL)
    //     .then(response => response.text())
    //     .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    //     .then(data => console.log(data))

    const script = document.createElement('script')
    const body = document.getElementsByTagName('body')[0]
    script.src = 'https://news.yandex.ru/ru/sport.utf8.js'
    body.appendChild(script)
    script.addEventListener('load', () => {
      setFeed(window.m_sport);
    })
  }, [])

  function fullFeedHandler(id) {
    let fullFeed = window.m_sport.filter((item: IFeed) => item.ts === id).flat(2)
    setModalContent(fullFeed[0])
    // fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
    // .then(response => {
    //   if (response.ok) {
    //     return response.json();
    //   }
    //   throw new Error('Network response was not ok.')
    // })
    // .then(data => {
    //   let proxy = [];
    //   let snippets: any = new DOMParser().parseFromString(data.contents, "text/html").querySelectorAll('.mg-snippet__text')
    //   snippets = [...snippets];
    //   snippets.forEach((item) => {
    //     proxy.push(item.innerHTML)
    //   })
    //   setFeed(proxy);
    // });
    setShowModal(true)
  }

  return isLogin ? (
    <Layout>
      {feed.map((item: IFeed) => {
          return <NewsItem
            key={item.ts}
            onClick={() => fullFeedHandler(item.ts)}
            properties={item}
          />
        })}

      <Modal onClose={() => setShowModal(false)} show={showModal} feed={modalContent}/>
    </Layout>
  ) : (
    <h1>You must be login</h1>
  )
};

export default WithRefreshingToken(LayoutUser(NewsfeedLayout))