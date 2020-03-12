import React, { useState } from 'react';

import { useRouter } from 'next/router';

import ProductPage from '@components/ProductPage';

const Product = props => {
  // const [] = useState()
  const { route } = props;

  const router = useRouter();

  return <ProductPage id={router.query.id}/>;
};

export default Product;
