import React from 'react';

import { useRouter } from 'next/router'

import Navbar from '@components/Navbar';
import ProductPage from '@components/ProductPage';

const Product = () => {
  const router = useRouter();

  return (
    <>
      {/* <Navbar /> */}
      <ProductPage id={router.query.id}/>
    </>
  );
};

export default Product;
