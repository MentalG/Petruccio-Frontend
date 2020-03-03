import React from 'react';

import styles from './Navbar.module.scss';

const Navbar = ({color}) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <span style={{color: color}}>PETRUCCIO</span>
      </div>
      <div className={styles.infoWrapper}>
        <span style={{color: color}}>Products</span>
        <span style={{color: color}}>Contacts</span>
      </div>
    </div>
  );
};

export default Navbar;
