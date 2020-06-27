import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { setViewport } from '@store/actions/site.js';
import { getProducts } from '@store/actions/site.js';

// import data from '@api/mockup.js';

import Title from '@components/Title';
import Product from '@components/Product';

// import api from '../../api-singleton';

import styles from '@styles/mainPage.module.scss';

const renderProducts = (data) => {
  return data.map((item, key) => {
    return <Product {...item} key={key} />;
  });
};

const Main = props => {
  const viewport = props.siteReducer.viewport
  const data = props.siteReducer.products
  const sections = ['main'].concat(data.map(item => item.id));

  // const getOrders = async () => {
  //   try {
  //     const response = await api.products.getProducts();
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  useEffect(() => {
    props.getProducts()
  }, []);

  useEffect(() => {
    document.getElementById(viewport).scrollIntoView({ behavior: 'smooth' });
  })

  const wheelHandler = event => {
    const isUp = event.deltaY > 0 ? false : true;
    let section = sections.indexOf(viewport);

    if (isUp) {
      section <= 0 ? 0 : --section;
    } else if (!isUp) {
      section >= sections.length - 1 ? sections.length - 1 : ++section;
    }

    props.setViewport(sections[section]);
  };

  return (
    <div onWheel={e => wheelHandler(e)}>
      <section className={styles.titleSection} id={'main'}>
        <Title />
      </section>
      <div className={styles.button} />
      {renderProducts(data)}
    </div>
  );
};

Main.getInitialProps = async ({ store }) => store

const mapStateToProps = state => state;

const mapDispatchToProps = {
  setViewport: setViewport,
  getProducts: getProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
