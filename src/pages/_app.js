import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import withRedux from 'next-redux-wrapper';

import store from '@store/store.js';

import Navbar from '@components/Navbar';

import '@styles/index.module.scss';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps: pageProps };
  }

  render() {
    const { Component, pageProps, store, router } = this.props;

    return (
        <>
        <title>Pettrucio</title>
        <Provider store={store}>
          <Navbar />
          <Component {...pageProps} route={router.route} />
        </Provider>
        </>
    );
  }
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
