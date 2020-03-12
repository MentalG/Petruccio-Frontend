import React, { useState } from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import styles from './Navbar.module.scss';

const Navbar = props => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <span style={{ color: '#000' }}>PETRUCCIO</span>
      </div>
      <div className={styles.infoWrapper}>
        <span style={{ color: '#000' }}>Products</span>
        <span style={{ color: '#000' }}>Contacts</span>
        <span style={{ color: '#000' }}>Cart({props.shopping.products.length})</span>
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

Navbar.getInitialProps = async ({ store }) => {
  return store;
};

Navbar.propTypes = {
  color: PropTypes.string
};

Navbar.defaultProps = {
  color: '#000'
};

export default connect(mapStateToProps)(Navbar);
