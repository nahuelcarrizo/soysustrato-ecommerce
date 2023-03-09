import '../config/fonts.css';
import '../config/global-styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

import type { AppProps } from 'next/app';
import React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { StateProvider } from '../context/store';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
    width: 100vw;
    scroll-behavior:smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <GlobalStyle />
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </StateProvider>
  );
}

export default MyApp;
