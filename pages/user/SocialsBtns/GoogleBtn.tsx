import { useEffect } from 'react';
import { useRouter } from 'next/router'
import Cookies from 'js-cookie';
import queryString from 'query-string';

import {REDIRECT_GOOGLE_BTN, GOOGLE_IMG} from '../../../utils/urls'

import {loginUserWithSocials} from '../../../API/loginUser';

const GoogleBtn = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(REDIRECT_GOOGLE_BTN)
  };

  useEffect(() => {
    const googleData = queryString.parse(window.location.hash)
    const googleToken = queryString.parse(window.location.search).access_token;

    if (googleData.state === 'google') {
      loginUserWithSocials(googleToken, 'token')
        .then((token) => {
          Cookies.set('userLogin', JSON.stringify({type: 'google', token}), { expires: 2 });
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
