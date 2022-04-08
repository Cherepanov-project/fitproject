import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import queryString from 'query-string';

import {REDIRECT_VK_BTN, VK_IMG} from '../../../utils/urls'

import {loginUserWithSocials} from '../../../API/loginUser';

const VkBtn = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(REDIRECT_VK_BTN)
  };

  useEffect(() => {
    const vkData = queryString.parse(window.location.hash);
    const vkCode = queryString.parse(window.location.search).code;
    
    if (vkData.state === 'vk') {
      loginUserWithSocials(vkCode)
        .then((token) => {
          Cookies.set('userLogin', JSON.stringify({type: 'vk', token}), { expires: 2 });
        })
        .then(() => {
          router.push('/user/statistics')
        });
    }
  }, []);

  return (
    <button style={{ background: 'none', border: 'none' }} onClick={handleRedirect}>
      <img
        src={VK_IMG}
        alt="vk logo"
        style={{ width: 40, height: 40, cursor: 'pointer', borderRadius: '50%' }}
      />
    </button>
  );
};

export default VkBtn;
