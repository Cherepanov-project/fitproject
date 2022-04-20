import Script from 'next/script';
import { QueryClient, QueryClientProvider } from 'react-query';

const MyApp = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  return (
    <>
      <Script
        src="https://apis.google.com/js/platform.js?onload=init"
        strategy="beforeInteractive"
      />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
