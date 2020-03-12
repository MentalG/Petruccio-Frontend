import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import ProductPage from '@components/ProductPage';

const Product = props => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "auto"
  })

  return <ProductPage id={router.query.id}/>;
};

export default Product;
