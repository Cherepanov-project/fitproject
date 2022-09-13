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
  const isLogin = !!Cookies.get(ACCESS_TOKEN)
  const [feed, setFeed] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  useEffect(() => {
    if (!Cookies.get(ACCESS_TOKEN)) {
      router.push("/user")
    }
  }, [router])

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=d8053b5977f94849b3de7f2fe5e83ffa')
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setFeed(data)
      })

    // const script = document.createElement('script')
    // const body = document.getElementsByTagName('body')[0]
    // script.src = 'https://news.yandex.ru/ru/sport.utf8.js'
    // body.appendChild(script)
    // script.addEventListener('load', () => {
    //   setFeed(window.m_sport);
    // })
  }, [])

  function fullFeedHandler(id) {
    let fullFeed = window.m_sport.filter((item: IFeed) => item.ts === id)
    setModalContent(fullFeed[0])
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