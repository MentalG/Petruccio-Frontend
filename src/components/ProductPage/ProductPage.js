import React from 'react';

import styles from './ProductPage.module.scss';

const ProductPage = props => {
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
            <img src={image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
