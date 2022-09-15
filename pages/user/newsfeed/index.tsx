import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie"
import NewsItem from "@/components/Newsfeed/newsItem";
import { Layout } from "@/components/Newsfeed/newsfeed.styles";
import { IFeed } from "@/components/Newsfeed/newsfeed.interface";
import { UserLayout } from "@/containers/Layout-user/layoutUser"
import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken"
import Modal from "@/components/Newsfeed/Modal/Modal";
import {ACCESS_TOKEN} from "@/constants/titles";
import {useRouter} from "next/router";
import {WithLayout} from "@/containers/Layout-user/withLayout";

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
    fetch('https://newsapi.org/v2/everything?q=sports&language=ru&apiKey=d8053b5977f94849b3de7f2fe5e83ffa')
      .then(data => data.json())
      .then(data => {
        setFeed(data.articles)
      })
  }, [])

  function fullFeedHandler(id) {
    let fullFeed = feed.filter((item: IFeed) => item.url === id)
    setModalContent(fullFeed[0])
    setShowModal(true)
  }

  return isLogin ? (
    <Layout>
      {feed.map((item: IFeed) => {
          return <NewsItem
            key={item.url}
            onClick={() => fullFeedHandler(item.url)}
            properties={item}
          />
        })}

      <Modal onClose={() => setShowModal(false)} show={showModal} feed={modalContent}/>
    </Layout>
  ) : (
    <h1>You must be login</h1>
  )
};

export default WithLayout(WithRefreshingToken(NewsfeedLayout))