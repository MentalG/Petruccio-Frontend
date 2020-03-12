import React from 'react';

import { connect } from 'react-redux';

import { addProduct } from '@store/actions/shoppingActions.js';

import data from '@api/mockup.js';

import styles from './ProductPage.module.scss';

const ProductPage = props => {
  const item = data.filter(({ id }) => {
    return id === props.id;
  });
  const { name, image, backgroundColor } = item[0];

  const clickHandle = () => {
    props.addProduct(item[0]);
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <span
          className={styles.productName}
          style={{ color: `${backgroundColor}` }}
        >
          {name}
        </span>
        <div className={styles.productImage}>
          <div
            className={styles.elipse}
            style={{
              color: `${backgroundColor}`,
              border: `3px solid ${backgroundColor}`
            }}
          >
            LESS SUGAR
          </div>
          <div className={styles.imageWrapper}>
            <img src={image} />
          </div>
          <div className={styles.buy} style={{ color: backgroundColor }}>
            <button onClick={() => clickHandle()}>Buy</button>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductPage.getInitialProps = async ({ store }) => store

const mapStateToProps = state => state

const mapDispatchToProps = {
  addProduct: addProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
