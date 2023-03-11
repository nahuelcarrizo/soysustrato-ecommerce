import '../config/fonts.css';
import '../config/global-styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect } from 'react';

import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { StateProvider } from '../context/store';
import {createGlobalStyle} from 'styled-components';
import { useRouter } from 'next/router';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
    width: 100vw;
    scroll-behavior:smooth;
  }
  body a { 
    text-decoration: none;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 1024) {
        router.push('/desktop-only-page');
      }
    };

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [router]);



  return (
    <StateProvider>
      <GlobalStyle />
      <SSRProvider>
        <Component {...pageProps} />
        <Analytics />
      </SSRProvider>
    </StateProvider>
  );
}

export default MyApp;
