import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import queryString from 'query-string';

import {REDIRECT_MAIL_BTN, MAIL_IMG} from '../../../utils/urls'

import {loginUserWithSocials} from '../../../API/loginUser';

const MailBtn = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(REDIRECT_MAIL_BTN)
  };

  useEffect(() => {
    const mailData = queryString.parse(window.location.hash);
    const mailCode = queryString.parse(window.location.search).code;

    if (mailData.state === 'mail') {
      loginUserWithSocials(mailCode, 'code')
        .then((token) => {
          Cookies.set('userLogin', JSON.stringify({type: 'mail', token}), { expires: 2 });
        })
        .then(() => {
          router.push('/user/statistics')
        });
    }
  }, []);

  return (
    <button style={{ background: 'none', border: 'none' }} onClick={handleRedirect}>
      <img
        src={MAIL_IMG}
        alt="mail login"
        style={{ width: 40, height: 40, cursor: 'pointer', borderRadius: '50%' }}
      />
    </button>
  );
};

export default MailBtn;
