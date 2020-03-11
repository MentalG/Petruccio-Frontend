import React, { useState } from 'react';

import PropTypes from 'prop-types';

import styles from './Navbar.module.scss';

const Navbar = ({ color }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <span style={{ color: color }}>PETRUCCIO</span>
      </div>
      <div className={styles.infoWrapper}>
        <span style={{ color: color }}>Products</span>
        <span style={{ color: color }}>Contacts</span>
        <span style={{ color: color }}>Cart({count})</span>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  color: PropTypes.string
};

Navbar.defaultProps = {
  color: '#000'
};

export default Navbar;
