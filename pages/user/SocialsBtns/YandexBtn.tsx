import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import queryString from 'query-string';

import {REDIRECT_YANDEX_BTN, YANDEX_IMG} from '../../../utils/urls';

import {loginUserWithSocials} from '../../../API/loginUser';

const YandexBtn = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(REDIRECT_YANDEX_BTN)
  };

  useEffect(() => {
    const yandexData = queryString.parse(window.location.hash)
    const yandexCode = queryString.parse(window.location.search).code;

    if (yandexData.state === 'yandex') {
      loginUserWithSocials(yandexCode, 'code')
        .then((token) => {
          Cookies.set('userLogin', JSON.stringify({type: 'yandex', token}), { expires: 2 });
        })
        .then(() => {
          router.push('/user/statistics')
        });
    }
  }, []);

  return (
    <button style={{ background: 'none', border: 'none' }} onClick={handleRedirect}>
      <img
        src={YANDEX_IMG}
        alt="vk logo"
        style={{ width: 40, height: 40, cursor: 'pointer', borderRadius: '50%' }}
      />
    </button>
  );
};

export default YandexBtn;
