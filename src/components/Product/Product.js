import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import { setViewport } from '@store/actions/site.js';

import styles from './Product.module.scss';

const Product = props => {
  const { backgroundColor, name, image, id } = props;

  const clickHandle = () => {
    props.setViewport('main')
  }

  return (
    <section
      className={styles.container}
      style={{ background: `${backgroundColor}` }}
      id={id}
    >
      <div className={styles.outerWrapper}>
        <div className={styles.wrapper}>
          <div className={styles.productName}>
            <span>{name}</span>
          </div>
          <div>
            <div className={styles.elipse}>LESS SUGAR</div>
          </div>
          <div className={styles.product} onClick={() => clickHandle()}>
            <Link href='/product/[id]' as={`/product/${id}`}>
              <img src={image} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Product.getInitialProps = async ({ store }) => store

const mapStateToProps = state => state

const mapDispatchToProps = {
  setViewport: setViewport
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
