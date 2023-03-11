import '../config/global-styled-components'

import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';

import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class SoySustratoDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps>{
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    }
    catch(error){
      throw new Error(error);
      
    }
    finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Gluten:wght@200;400;700&family=Poppins:wght@500;800&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=DynaPuff&family=Gluten:wght@200;400;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Chettan+2:wght@400;600;700;800&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&family=Poppins:wght@600;700&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
