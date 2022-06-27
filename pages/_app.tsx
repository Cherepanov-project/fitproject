import Script from 'next/script';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

const MyApp = ({ Component, pageProps }) => {
    const queryClient = new QueryClient()

  return (
    <>
      <Script
        src="https://apis.google.com/js/platform.js?onload=init"
        strategy="beforeInteractive"
      />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default MyApp
