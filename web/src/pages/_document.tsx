import '../config/global-styled-components'

import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';

import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MarujaDocument extends Document {
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
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
