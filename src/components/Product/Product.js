import React from 'react';

import Link from 'next/link';

import styles from './Product.module.scss';

const Product = props => {
  const { backgroundColor, name, image, id } = props;

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
          <div className={styles.product}>
            <Link href='/products/[id]' as={`/products/${id}`}>
              <img src={image} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
