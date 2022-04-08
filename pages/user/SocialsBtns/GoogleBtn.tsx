import { useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import queryString from 'query-string';

import {REDIRECT_GOOGLE_BTN, GOOGLE_IMG} from '../../../utils/urls'


const GoogleBtn = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(REDIRECT_GOOGLE_BTN)
  };

  const getUser = async (token: string | string[]) => {
    const host = 'https://login.yandex.ru/info?';
    const { data } = await axios.get(`${host}oauth_token=${token}`);
    return data;
  };

  useEffect(() => {
    const yandexCode = queryString.parse(window.location.hash);
    if (yandexCode.state === 'yandex') {
      getUser(yandexCode.access_token)
        .then((data) => {
          localStorage.setItem('user', JSON.stringify({ type: 'yandex', data }));
        })
        .then(() => {
          router.push('/user/statistics')
        });
    }
  }, []);

  return (
    <button style={{ background: 'none', border: 'none' }} onClick={handleRedirect}>
      <img
        src={GOOGLE_IMG}
        alt="google-login"
        style={{ width: 40, height: 40, cursor: 'pointer', borderRadius: '50%' }}
      />
    </button>
  );
};

export default GoogleBtn;
