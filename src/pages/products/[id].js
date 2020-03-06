import React from 'react';

import Navbar from '@components/Navbar';
import ProductPage from '@components/ProductPage';

import { useRouter } from 'next/router';

const Product = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      {/* <div>{router.query.id}</div> */}
      <ProductPage id={router.query.id}/>
    </>
  );
};

export default Product;
