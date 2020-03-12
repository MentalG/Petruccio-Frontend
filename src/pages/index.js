import React, { useEffect } from 'react';

import Main from '@pages/main';

const MainPage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden"
  })

  return <Main/>;
};

export default MainPage;
