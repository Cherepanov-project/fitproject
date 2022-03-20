import { useEffect } from 'react';

const GoogleBtn = () => {
  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({ client_id: process.env.REACT_APP_GOOGLE_ID });
    });
  }, []);

  const signIn = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signIn({
      scope: 'profile email',
    })
      .then((data) => {
        localStorage.setItem('user', JSON.stringify({ type: 'google', data }));
      })
      .then(() => {
        window.location.href = `${process.env.REACT_APP_LOCAL_URL}/user-google`;
      });
  };

  const signOut = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signOut().then(() => {
      localStorage.clear();
    });
    GoogleAuth.disconnect();
  };

  return (
    <button style={{ background: 'none', border: 'none' }} onClick={signIn}>
      <img
        src="https://play-lh.googleusercontent.com/4cXfm9YG59lys9woio9JM5qR_bOpCrv0dgJ1XmowbzgRpIzDRyNQQ8vB8yXsz3NQJ9Q"
        alt="google-login"
        style={{ width: 40, height: 40, cursor: 'pointer', borderRadius: '50%' }}
      />
    </button>
  );
};

export default GoogleBtn;
