import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import styles from '@styles/index.module.scss'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  
  render() {
    return (
      <Html lang='ru'>
        <Head>
          <meta name='Description' content='Author: Illia Hromov'></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
