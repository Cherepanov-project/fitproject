import { useRouter } from 'next/router'
import { useEffect } from 'react';
import queryString from 'query-string';
import axios from 'axios';

const GoogleBtn = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`https://accounts.google.com/o/oauth2/v2/auth?
 scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&
 include_granted_scopes=true&
 response_type=token&
 state=state_parameter_passthrough_value&
 redirect_uri=${process.env.LOCAL_URL}&
 client_id=${process.env.GOOGLE_APP_ID}`)
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
          window.location.href = `${process.env.LOCAL_URL}/user/statistics`;
        });
    }
  }, []);

  return (
    <button style={{ background: 'none', border: 'none' }} onClick={handleRedirect}>
      <img
        src="https://play-lh.googleusercontent.com/4cXfm9YG59lys9woio9JM5qR_bOpCrv0dgJ1XmowbzgRpIzDRyNQQ8vB8yXsz3NQJ9Q"
        alt="google-login"
        style={{ width: 40, height: 40, cursor: 'pointer', borderRadius: '50%' }}
      />
    </button>
  );
};

export default GoogleBtn;
