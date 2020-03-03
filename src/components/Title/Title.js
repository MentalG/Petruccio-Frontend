import React, { useEffect } from 'react';

import styles from './Title.module.scss';

const Title = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.primary}>
          <span>Sesame superfood snack</span>
        </div>
        <div className={styles.secondary}>
          <span>
            Terrabites sesame squares are made of premium, natural ingredients
            in a range of delicious new flavours. Feed your brain and body with
            the sesame superfood snack like you have never tasted before.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Title;
