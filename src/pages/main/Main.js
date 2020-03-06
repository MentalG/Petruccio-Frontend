import React, { useState, useEffect } from 'react';

import data from '@api/mockup.js';

import Navbar from '@components/Navbar';
import Title from '@components/Title';
import Product from '@components/Product';

import styles from '@styles/mainPage.module.scss';

const renderProducts = () => {
  return data.map((item, key) => {
    return (
      <Product {...item} key={key} />
    );
  });
};

const Main = () => {
  const [viewport, setViewport] = useState('main')
  const sections = ['main'].concat(data.map((item) => item.id))
  const [color, setColor] = useState('#000')

  useEffect(() => {
    document.getElementById(viewport).scrollIntoView({behavior: "smooth"})

    viewport !== 'main' ? setColor('#fff') : setColor('#000')
  })

  const wheelHandler = event => {
    const isUp = event.deltaY > 0 ? false : true
    let section = sections.indexOf(viewport)

    if (isUp) {
      section <= 0 ? 0 : --section
    } else if (!isUp){
      section >= sections.length - 1 ? sections.length - 1 : ++section
    }

    setViewport(sections[section])
  }

  return (
    <div onWheel={(e) => wheelHandler(e)}>
      <section className={styles.titleSection} id={'main'}>
        <Navbar color={color}/>
        <Title />
      </section>
      <div className={styles.button} />
      {renderProducts()}
    </div>
  );
};

export default Main;
