import { useRouter } from 'next/router'
import { useEffect } from 'react';
import queryString from 'query-string';
import axios from 'axios';

const MailBtn = () => {
  const router = useRouter()
  const handleRedirect = () => {
    router.push(`https://oauth.mail.ru/login?client_id=6695c1fb9ec5411fa03a1f14f3982208&response_type=code&scope=userinfo&redirect_uri=http://localhost:3000&state=mail`)
  };

  // отправка кода на сервер и получение данных о пользователе
  const getToken = async (code: string) => {
    const host = 'https://oauth.mail.ru/token';
    const { data } = await axios.post(`${host}`, {
      data: {
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.LOCAL_URL,
      },
    });
    return data;
  };

  useEffect(() => {
    const mailCode = queryString.parse(window.location.search).code;
    console.log(mailCode);
    // if(mailCode) {
    //   getToken(mailCode).then((token)=>{
    //     console.log(token)
    //   })
    //   // localStorage.setItem('user', JSON.stringify({type: 'mail', user}))
    // }
  }, []);

  return (
    <button style={{ background: 'none', border: 'none' }} onClick={handleRedirect}>
      <img
        src="https://limg.imgsmail.ru/splash/v/i/share-fp-a2954bf3df.png"
        alt="mail login"
        style={{ width: 40, height: 40, cursor: 'pointer', borderRadius: '50%' }}
      />
    </button>
  );
};

export default MailBtn;
