import { Provider } from 'react-redux';
import { store } from '@/redux/filmdb';
import { GlobalStyle } from '@/styles/globals.js';
import Head from 'next/head';
// import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
