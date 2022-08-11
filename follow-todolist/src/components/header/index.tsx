import React, { ReactElement } from 'react';
import Router from 'next/router';
import MyButton from 'src/components/MyButton';

import styles from './index.module.scss';

interface props {
  pageName: string;
}

const Header = ({ pageName }: props): ReactElement => {
  const handleClick = () => {
    Router.back();
  };
  return (
    <div className={styles.header_wrapper}>
      <h1 className={styles.title}>cotton's {pageName} page</h1>
      <MyButton size="small" onClick={handleClick}>
        return
      </MyButton>
    </div>
  );
};

export default Header;
