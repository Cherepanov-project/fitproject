import { useRouter } from 'next/router'
import { useEffect } from 'react';
import queryString from 'query-string';
import axios from 'axios';

const VkBtn = () => {
  const router = useRouter()
  const handleRedirect = () => {
    const resType = 'token'; // запрос с фронта если стоит токен
    router.push(`https://oauth.vk.com/authorize?client_id=8103808&display=popup&redirect_uri=http://localhost:3000/user&scope=offline&response_type=${resType}&v=5.131&state=vk-auth`)
  };

  //бэкэнд принимает код, получает токен -> получает данные пользователя и возвращает на фронт
  // const getUser = async (code) => {
  //   const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_API}`, {
  //     data: {
  //       code,
  //     },
  //   });
  //   return data;
  // };

  // useEffect(() => {
  //   const vkCode = queryString.parse(window.location.search).code;
  //   if (vkCode) {
  //     getUser(vkCode).then((data) => {
  //       localStorage.setItem(
  //         'user',
  //         JSON.stringify({
  //           type: 'vkontakte',
  //           data,
  //         }),
  //       );
  //     });
  //   }
  // }, []);

  const getUser = async (user_id, token) => {
    const { data } = await axios.get(
      `https://api.vk.com/method/users.get?user_ids=${user_id}&fields=photo_400,has_mobile,home_town,contacts,mobile_phone&access_token=${token}&v=5.131`,
    );
    return data;
  };

  useEffect(() => {
    const vkCode = queryString.parse(window.location.hash);
    if (vkCode.state === 'vk-auth') {
      getUser(vkCode.user_id, vkCode.access_token).then((user) => {
        localStorage.setItem(
          'user',
          JSON.stringify({
            type: 'vkontakte',
            data: user,
          }),
        );
      });
    }
  }, []);

  return (
    <button style={{ background: 'none', border: 'none' }} onClick={handleRedirect}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/800px-VK_Compact_Logo_%282021-present%29.svg.png"
        alt="vk logo"
        style={{ width: 40, height: 40, cursor: 'pointer', borderRadius: '50%' }}
      />
    </button>
  );
};

export default VkBtn;
