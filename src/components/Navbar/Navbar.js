import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import styles from './Navbar.module.scss';

const Navbar = props => {
  const currentViewport = props.globalState.viewport
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('#000')
  
  useEffect(() => {
    currentViewport !== 'main' ? setColor('#fff') : setColor('#000')
  })

  return (
    <div className={styles.container} style={{color : color}}>
      <div className={styles.logoWrapper}>
        <Link href='/' as={`/`}>
          <span>PETRUCCIO</span>
        </Link>
      </div>
      <div className={styles.infoWrapper}>
        <span>Products</span>
        <span>Contacts</span>
        <span>Cart({props.globalState.products.length})</span>
      </div>
    </div>
  );
};

Navbar.getInitialProps = async ({ store }) => store

const mapStateToProps = state => state;

Navbar.propTypes = {
  color: PropTypes.string
};

Navbar.defaultProps = {
  color: '#000'
};

export default connect(mapStateToProps)(Navbar);
