import Script from 'next/script';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        src="https://apis.google.com/js/platform.js?onload=init"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
